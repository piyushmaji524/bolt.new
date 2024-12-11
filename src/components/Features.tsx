import React from 'react';
import { Cloud, Code2, Cpu, Globe, Rocket, Zap } from 'lucide-react';

const features = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud-Powered',
    description: 'Run your development environment entirely in the browser.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Instant Setup',
    description: 'No installation required. Start coding in seconds.',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Pre-configured',
    description: 'Popular frameworks and tools ready to use.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Collaborative',
    description: 'Share your workspace with others in real-time.',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Full Runtime',
    description: 'Complete Node.js environment with npm support.',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Deploy Ready',
    description: 'Deploy your projects with one click.',
  },
];

export function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to code, collaborate, and deploy.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}