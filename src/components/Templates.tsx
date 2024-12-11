import React from 'react';
import { ArrowRight } from 'lucide-react';

const templates = [
  {
    name: 'React + TypeScript',
    description: 'Modern web development with React 18 and TypeScript',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Next.js',
    description: 'Full-stack React applications with Next.js',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Vue + Vite',
    description: 'Lightning fast Vue.js development with Vite',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
  },
];

export function Templates() {
  return (
    <div id="templates" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Start with a Template</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose from our pre-configured templates to get started quickly
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={template.image}
                  alt={template.name}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                <p className="mt-2 text-gray-600">{template.description}</p>
                <button className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
                  Use Template <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}