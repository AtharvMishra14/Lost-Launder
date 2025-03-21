// Common types used across the application
export interface LostItem {
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  status: 'lost' | 'found';
}

export interface LaundryRequest {
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

export type ServiceType = 'home' | 'lost' | 'laundry';