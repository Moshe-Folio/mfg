// User types
export type User = {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
};

// Manufacturing ecosystem entity types
export type Tradeshow = {
  id: string;
  name: string;
  description: string;
  website: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  image_url?: string;
  created_at: string;
};

export type Publication = {
  id: string;
  name: string;
  description: string;
  website: string;
  type: 'Magazine' | 'Journal' | 'Blog' | 'Newsletter' | 'Other';
  frequency?: string;
  categories: string[];
  image_url?: string;
  created_at: string;
};

export type Community = {
  id: string;
  name: string;
  description: string;
  website: string;
  type: 'Online' | 'In-person' | 'Hybrid';
  size?: string;
  categories: string[];
  image_url?: string;
  created_at: string;
};

export type Organization = {
  id: string;
  name: string;
  description: string;
  website: string;
  type: 'Association' | 'Consortium' | 'Non-profit' | 'Government' | 'Other';
  size?: string;
  categories: string[];
  image_url?: string;
  created_at: string;
};

// User tracking/favorites
export type UserTracking = {
  id: string;
  user_id: string;
  entity_type: 'tradeshow' | 'publication' | 'community' | 'organization';
  entity_id: string;
  notes?: string;
  created_at: string;
};

// Dashboard types
export type DashboardStats = {
  total_tradeshows: number;
  total_publications: number;
  total_communities: number;
  total_organizations: number;
  user_tracked_count: number;
}; 