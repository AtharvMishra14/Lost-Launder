import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import LostAndFound from './components/LostAndFound';
import LaundryManagement from './components/LaundryManagement';
import HomePage from './components/HomePage';
import { ServiceType } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<ServiceType>('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main>
        {activeTab === 'home' ? (
          <HomePage onServiceSelect={setActiveTab} />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            {activeTab === 'lost' ? <LostAndFound /> : <LaundryManagement />}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;