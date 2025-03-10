# 5GB Cloud Storage Application

## Overview
A simple cloud storage application with a Python Flask backend and a vanilla JavaScript frontend.

## Prerequisites
- Python 3.8+
- pip (Python package manager)

## Backend Setup
1. Clone the repository
2. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

3. Install dependencies
```bash
pip install flask flask-cors werkzeug
```

4. Run the backend
```bash
python app.py  # Runs on http://localhost:5000
```

## Frontend
- Simply open the HTML file in a web browser
- Ensure backend is running before using the application

## Features
- Upload files (max 5GB total)
- List uploaded files
- Download files
- Delete files
- Real-time storage usage tracking

## Limitations
- Only supports specific file types
- No user authentication in this basic version
- In-memory file tracking

## Security Notes
- This is a basic implementation
- Not suitable for production without additional security measures
- No user authentication or access control

## Future Improvements
- User authentication
- More robust file type validation
- Persistent storage tracking
- Cloud deployment options
