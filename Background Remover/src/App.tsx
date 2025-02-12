import React from 'react';
import Sidebar from './components/Sidebar';
import ImageUploader from './components/ImageUploader';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Background Remover</h1>
          <p className="text-gray-600 mb-8">Upload an image to automatically remove its background</p>
          <ImageUploader />
        </div>
      </main>
    </div>
  );
}

export default App;