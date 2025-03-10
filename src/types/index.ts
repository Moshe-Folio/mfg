// User types
export type User = {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  company?: string;
  job_title?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
};

// Manufacturing ecosystem entity types
export type Tradeshow = {
  id: string;
  name: string;
  website: string;
  description: string;
  location: string;
  city: string;
  country: string;
  continent: string;
  start_date: string;
  end_date: string;
  categories: string[];
  image_url?: string;
  created_at: string;
  updated_at: string;
};

export type Publication = {
  id: string;
  name: string;
  website: string;
  description: string;
  format: 'Print' | 'Digital' | 'Podcast' | 'Mixed';
  frequency: string;
  categories: string[];
  image_url?: string;
  created_at: string;
  updated_at: string;
};

export type Community = {
  id: string;
  name: string;
  website: string;
  description: string;
  platform: 'LinkedIn' | 'Twitter' | 'YouTube' | 'Reddit' | 'Website' | 'Other';
  followers_count: number;
  categories: string[];
  image_url?: string;
  created_at: string;
  updated_at: string;
};

export type Organization = {
  id: string;
  name: string;
  website: string;
  description: string;
  membership_type: 'Individual' | 'Corporate' | 'Both';
  global_reach: 'Global' | 'National' | 'Regional';
  categories: string[];
  image_url?: string;
  created_at: string;
  updated_at: string;
};

// User tracking/favorites
export type UserTracking = {
  id: string;
  user_id: string;
  entity_type: 'tradeshow' | 'publication' | 'community' | 'organization';
  entity_id: string;
  notes?: string;
  created_at: string;
  updated_at: string;
};

// Dashboard types
export type DashboardStats = {
  total_tradeshows: number;
  total_publications: number;
  total_communities: number;
  total_organizations: number;
  user_tracked_count: number;
}; 