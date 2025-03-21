import React from 'react';
import { Building2, Search, Shirt } from 'lucide-react';
import { Button } from '../ui/Button';
import { ServiceType } from '../../types';

interface HeaderProps {
  activeTab: ServiceType;
  onTabChange: (tab: ServiceType) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onTabChange('home')}
          >
            <Building2 className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-xl font-semibold text-gray-900">
              Campus Services
            </h1>
          </div>
          <nav className="flex space-x-8">
            <Button
              variant="ghost"
              onClick={() => onTabChange('lost')}
              className={activeTab === 'lost' ? 'bg-indigo-50' : ''}
            >
              <Search className="h-5 w-5 mr-1.5" />
              Lost & Found
            </Button>
            <Button
              variant="ghost"
              onClick={() => onTabChange('laundry')}
              className={activeTab === 'laundry' ? 'bg-indigo-50' : ''}
            >
              <Shirt className="h-5 w-5 mr-1.5" />
              Laundry
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}