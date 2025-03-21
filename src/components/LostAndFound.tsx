import React, { useState } from 'react';
import { Search, PlusCircle, ClipboardList } from 'lucide-react';

interface LostItem {
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  status: 'lost' | 'found';
}

export default function LostAndFound() {
  const [view, setView] = useState<'search' | 'report'>('search');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual API calls
  const items: LostItem[] = [
    {
      id: '1',
      name: 'Blue Backpack',
      description: 'Nike backpack with laptop and books',
      location: 'Library',
      date: '2025-03-15',
      status: 'lost',
    },
    {
      id: '2',
      name: 'Student ID Card',
      description: 'Found near the cafeteria',
      location: 'Cafeteria',
      date: '2025-03-14',
      status: 'found',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setView('search')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              view === 'search'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Search className="inline-block h-5 w-5 mr-2" />
            Search Items
          </button>
          <button
            onClick={() => setView('report')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              view === 'report'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <PlusCircle className="inline-block h-5 w-5 mr-2" />
            Report Item
          </button>
        </nav>
      </div>

      {view === 'search' ? (
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="max-w-xl">
            <label htmlFor="search" className="sr-only">
              Search items
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search for lost or found items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg">
            <ul role="list" className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="px-4 py-5 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <ClipboardList className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <p className="mt-1 text-xs text-gray-500">
                          {item.location} • {item.date}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        item.status === 'found'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="max-w-xl bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Item Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}