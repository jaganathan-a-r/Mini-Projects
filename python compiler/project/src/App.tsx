import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import { Play, Terminal, Download } from 'lucide-react';

function App() {
  const [code, setCode] = useState('# Write your Python code here\nprint("Hello, World!")');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const runCode = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: 'python',
          version: '3.10',
          files: [{
            content: code
          }]
        })
      });
      
      const data = await response.json();
      setOutput(data.run.output || 'No output');
    } catch (error) {
      setOutput('Error executing code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.py';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold">Python Online Compiler</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={downloadCode}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download .py
            </button>
            <button
              onClick={runCode}
              disabled={isLoading}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              <Play className="w-4 h-4" />
              {isLoading ? 'Running...' : 'Run Code'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="bg-gray-700 px-4 py-2 text-sm font-medium">
              Python Code
            </div>
            <Editor
              height="60vh"
              defaultLanguage="python"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="bg-gray-700 px-4 py-2 text-sm font-medium">
              Output
            </div>
            <div className="p-4 font-mono text-sm whitespace-pre-wrap h-[60vh] overflow-auto">
              {output || 'Code output will appear here...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;