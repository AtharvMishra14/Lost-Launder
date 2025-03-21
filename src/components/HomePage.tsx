import React from 'react';
import { Search, Shirt, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onServiceSelect: (service: 'lost' | 'laundry') => void;
}

export default function HomePage({ onServiceSelect }: HomePageProps) {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=2969")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
              Welcome to Campus Services
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Your one-stop solution for campus life management. We provide efficient Lost & Found
              tracking and convenient Laundry Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onServiceSelect('lost')}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <Search className="h-5 w-5 mr-2" />
                Lost & Found
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
              <button
                onClick={() => onServiceSelect('laundry')}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                <Shirt className="h-5 w-5 mr-2" />
                Laundry Service
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive campus services designed to make your life easier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Lost & Found Card */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div
                className="h-64 rounded-xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=2970")',
                }}
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lost & Found System</h3>
              <p className="text-gray-600 mb-6">
                Efficiently track and recover lost items across campus. Our digital system makes it
                easy to report lost items and search through found items.
              </p>
              <button
                onClick={() => onServiceSelect('lost')}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
              >
                Access Lost & Found
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>

            {/* Laundry Service Card */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div
                className="h-64 rounded-xl mb-6 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=2971")',
                }}
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Laundry Management</h3>
              <p className="text-gray-600 mb-6">
                Convenient and reliable laundry services for students and staff. Track your laundry
                status in real-time and receive notifications when it's ready.
              </p>
              <button
                onClick={() => onServiceSelect('laundry')}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
              >
                Access Laundry Service
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-indigo-100">Items Recovered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-indigo-100">Service Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-indigo-100">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-indigo-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}