import React from 'react';
import { Bolt, Github } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Bolt className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-xl">Bolt</span>
          </div>
          <nav className="flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#templates" className="text-gray-600 hover:text-gray-900">Templates</a>
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}