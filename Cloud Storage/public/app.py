import os
import uuid
from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

# Configuration
UPLOAD_FOLDER = 'uploads/'
MAX_STORAGE_BYTES = 5 * 1024 * 1024 * 1024  # 5GB
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'mp3', 'mp4', 'pptx'}

# Ensure upload directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def calculate_total_storage():
    """Calculate current total storage used."""
    return sum(os.path.getsize(os.path.join(UPLOAD_FOLDER, f)) 
               for f in os.listdir(UPLOAD_FOLDER) 
               if os.path.isfile(os.path.join(UPLOAD_FOLDER, f)))

@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if file is present
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    
    # Check if filename is empty
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    # Check file type
    if not allowed_file(file.filename):
        return jsonify({"error": "File type not allowed"}), 400
    
    # Check storage limit
    current_storage = calculate_total_storage()
    file_size = len(file.read())
    file.seek(0)  # Reset file pointer
    
    if current_storage + file_size > MAX_STORAGE_BYTES:
        return jsonify({"error": "Storage limit exceeded"}), 400
    
    # Generate unique filename
    filename = str(uuid.uuid4()) + '_' + secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    
    # Save file
    file.save(file_path)
    
    return jsonify({
        "message": "File uploaded successfully", 
        "filename": filename
    }), 200

@app.route('/files', methods=['GET'])
def list_files():
    """List all uploaded files with their details."""
    files = []
    for filename in os.listdir(UPLOAD_FOLDER):
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        if os.path.isfile(filepath):
            files.append({
                "filename": filename.split('_', 1)[1],  # Original filename
                "size": os.path.getsize(filepath),
                "unique_id": filename.split('_', 1)[0]
            })
    
    return jsonify({
        "files": files,
        "total_storage_used": calculate_total_storage(),
        "total_storage_limit": MAX_STORAGE_BYTES
    })

@app.route('/download/<unique_id>', methods=['GET'])
def download_file(unique_id):
    """Download a file by its unique ID."""
    for filename in os.listdir(UPLOAD_FOLDER):
        if filename.startswith(unique_id):
            return send_file(
                os.path.join(UPLOAD_FOLDER, filename), 
                as_attachment=True, 
                download_name=filename.split('_', 1)[1]
            )
    
    return jsonify({"error": "File not found"}), 404

@app.route('/delete/<unique_id>', methods=['DELETE'])
def delete_file(unique_id):
    """Delete a file by its unique ID."""
    for filename in os.listdir(UPLOAD_FOLDER):
        if filename.startswith(unique_id):
            os.remove(os.path.join(UPLOAD_FOLDER, filename))
            return jsonify({"message": "File deleted successfully"}), 200
    
    return jsonify({"error": "File not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)

# Requirements (requirements.txt):
# flask
# flask-cors
# werkzeug
