import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
            Instant Dev Environments
            <br />
            <span className="text-blue-600">in Your Browser</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Start coding instantly with pre-configured development environments.
            No setup required. Just click and code.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700">
              Start Coding <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
              Try Demo <Zap className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}