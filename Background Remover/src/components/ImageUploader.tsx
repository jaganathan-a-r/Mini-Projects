import React, { useState, useCallback } from 'react';
import { Upload, Image as ImageIcon, Loader, Download, Trash2, AlertCircle } from 'lucide-react';

// The API key should be in an environment variable
// For now, we'll show an error if it's not working
const API_KEY = import.meta.env.VITE_REMOVE_BG_API_KEY || '';

const ImageUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  }, []);

  const handleFile = async (file: File) => {
    setError(null);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
      removeBackground(file);
    };
    reader.readAsDataURL(file);
  };

  const removeBackground = async (file: File) => {
    if (!API_KEY) {
      setError('API key is missing. Please add your Remove.bg API key to the environment variables.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setProgress(0);
    try {
      const formData = new FormData();
      formData.append('image_file', file);

      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': API_KEY,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.errors?.[0]?.title || 'Failed to remove background');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setProcessedImage(url);
      simulateProgress();
    } catch (error) {
      console.error('Error removing background:', error);
      setError(error instanceof Error ? error.message : 'Failed to remove background. Please try again.');
      setLoading(false);
    }
  };

  const simulateProgress = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 50);
  };

  const handleDownload = async () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'processed-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleReset = () => {
    setImage(null);
    setProcessedImage(null);
    setProgress(0);
    setLoading(false);
    setError(null);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto p-8">
      {error && (
        <div className="w-full mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <div 
        className={`relative w-full min-h-[400px] border-2 border-dashed rounded-2xl transition-all duration-300 ease-in-out
          ${dragActive ? 'border-blue-500 bg-blue-50 scale-102' : 'border-gray-300 hover:border-gray-400'}
          ${!image ? 'cursor-pointer' : 'hidden'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-full animate-pulse opacity-75"></div>
            <Upload className="w-16 h-16 text-blue-500 relative" />
          </div>
          <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-2">Drop your image here</h3>
          <p className="text-gray-500 text-center max-w-md">
            Drop your image here, or click to select. We support JPG, PNG and JPEG formats.
          </p>
        </div>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
        />
      </div>

      {image && (
        <div className="w-full mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Image Processing</h2>
            <div className="flex gap-4">
              <button
                onClick={handleDownload}
                disabled={!processedImage || loading}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Download className="w-5 h-5" />
                Download
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                Reset
              </button>
            </div>
          </div>

          {loading && (
            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">Original Image</h3>
                </div>
                <div className="relative aspect-square bg-gray-50">
                  <img src={image} alt="Original" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">Processed Image</h3>
                </div>
                <div className="relative aspect-square bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAOdEVYdFRpdGxlAENoZWNrZXJz5KMAZQAAABd0RVh0QXV0aG9yAExhcG8gQ2FsYW1hbmRyZWnfkRoqAAAAKXRFWHREZXNjcmlwdGlvbgBCYXNlZCBvbiBKYWt1YiBTdGVpbmVyJ3Mgd29yaxUT4uoAAAAWdEVYdENyZWF0aW9uIFRpbWUAMjAwNC0wMS0yME7RH28AAAAldEVYdFNvdXJjZQBodHRwOi8vamltbWFjLm11c2ljaGFsbC5jeolj2SAAAA1pVFh0Q29weXJpZ2h0AFpYQyhYEgAACldJREFUGJVjYGBg+P//P8P///8Z/v37x/D371+Gf//+Mvz584fhz58/DL9//2H4/fs3w69fvxh+/vzF8OPHD4bv378zfPv2jeHr168MX758Yfj8+TPDp0+fGD5+/Mjw4cMHhvfv3zO8e/eO4e3btwxv3rxhePXqFcPLly8ZXrx4wfD8+XOGp0+fMjx58oTh8ePHDI8ePWJ4+PAhw4MHDxjuP3jAcO/ePYa7d+8y3Llzh+H27dsMt27dYrh58ybDjRs3GK5fv85w7do1hqtXrzJcuXKF4fLlywwXL15kuHDhAsP58+cZzp07x3D27FmGM2fOMJw+fZrh1KlTDCdPnmQ4ceIEw/Hjxxn+///P8P//fwYA0mZC+zxXqrEAAAAASUVORK5CYII=')] bg-repeat">
                  {loading ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80">
                      <div className="flex flex-col items-center">
                        <Loader className="w-10 h-10 text-blue-500 animate-spin mb-4" />
                        <p className="text-gray-600">Processing image...</p>
                      </div>
                    </div>
                  ) : processedImage ? (
                    <img src={processedImage} alt="Processed" className="w-full h-full object-contain" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon className="w-16 h-16 text-gray-300" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;