import React from 'react';
import { Upload, Settings, History, Home } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">
      <div className="flex items-center gap-2 mb-8">
        <Upload className="w-6 h-6 text-blue-400" />
        <h1 className="text-xl font-bold">BG Remover</h1>
      </div>
      
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-2 rounded-lg bg-gray-800">
              <Upload className="w-5 h-5" />
              <span>Upload Image</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <History className="w-5 h-5" />
              <span>History</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;