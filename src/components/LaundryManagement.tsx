import React, { useState } from 'react';
import { Shirt, Clock, CheckCircle, XCircle } from 'lucide-react';

interface LaundryRequest {
  id: string;
  items: {
    shirts: number;
    pants: number;
    other: number;
  };
  status: 'pending' | 'processing' | 'completed';
  dropoffDate: string;
  pickupDate: string;
}

export default function LaundryManagement() {
  const [view, setView] = useState<'status' | 'request'>('status');

  // Mock data - replace with actual API calls
  const requests: LaundryRequest[] = [
    {
      id: '1',
      items: {
        shirts: 3,
        pants: 2,
        other: 1,
      },
      status: 'processing',
      dropoffDate: '2025-03-15',
      pickupDate: '2025-03-16',
    },
    {
      id: '2',
      items: {
        shirts: 2,
        pants: 1,
        other: 0,
      },
      status: 'completed',
      dropoffDate: '2025-03-14',
      pickupDate: '2025-03-15',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setView('status')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              view === 'status'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Clock className="inline-block h-5 w-5 mr-2" />
            Check Status
          </button>
          <button
            onClick={() => setView('request')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              view === 'request'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Shirt className="inline-block h-5 w-5 mr-2" />
            New Request
          </button>
        </nav>
      </div>

      {view === 'status' ? (
        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg">
          <ul role="list" className="divide-y divide-gray-200">
            {requests.map((request) => (
              <li key={request.id} className="px-4 py-5 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center">
                      <Shirt className="h-5 w-5 text-gray-400" />
                      <span className="ml-2 text-sm font-medium text-gray-900">
                        Request #{request.id}
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      <p>
                        {request.items.shirts} shirts • {request.items.pants} pants •{' '}
                        {request.items.other} other items
                      </p>
                      <p className="mt-1">
                        Dropoff: {request.dropoffDate} • Pickup: {request.pickupDate}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                      request.status
                    )}`}
                  >
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="max-w-xl bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="shirts" className="block text-sm font-medium text-gray-700">
                  Shirts
                </label>
                <input
                  type="number"
                  name="shirts"
                  id="shirts"
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="pants" className="block text-sm font-medium text-gray-700">
                  Pants
                </label>
                <input
                  type="number"
                  name="pants"
                  id="pants"
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="other" className="block text-sm font-medium text-gray-700">
                  Other Items
                </label>
                <input
                  type="number"
                  name="other"
                  id="other"
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700">
                Preferred Dropoff Date
              </label>
              <input
                type="date"
                name="dropoff"
                id="dropoff"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                Special Instructions
              </label>
              <textarea
                name="notes"
                id="notes"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Any special washing instructions or notes..."
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}