-- Create a table for user profiles
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  company TEXT,
  job_title TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a table for tradeshows
CREATE TABLE IF NOT EXISTS tradeshows (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  website TEXT,
  location TEXT,
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  categories TEXT[] DEFAULT '{}',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a table for publications
CREATE TABLE IF NOT EXISTS publications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  website TEXT,
  type TEXT CHECK (type IN ('Magazine', 'Journal', 'Blog', 'Newsletter', 'Other')),
  frequency TEXT,
  categories TEXT[] DEFAULT '{}',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a table for communities
CREATE TABLE IF NOT EXISTS communities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  website TEXT,
  type TEXT CHECK (type IN ('Online', 'In-person', 'Hybrid')),
  size TEXT,
  categories TEXT[] DEFAULT '{}',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a table for organizations
CREATE TABLE IF NOT EXISTS organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  website TEXT,
  type TEXT CHECK (type IN ('Association', 'Consortium', 'Non-profit', 'Government', 'Other')),
  size TEXT,
  categories TEXT[] DEFAULT '{}',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a table for user tracking/favorites
CREATE TABLE IF NOT EXISTS user_tracking (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
  entity_type TEXT CHECK (entity_type IN ('tradeshow', 'publication', 'community', 'organization')),
  entity_id UUID NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  -- Create a composite unique constraint to prevent duplicate tracking
  UNIQUE(user_id, entity_type, entity_id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_tradeshows_categories ON tradeshows USING GIN (categories);
CREATE INDEX IF NOT EXISTS idx_publications_categories ON publications USING GIN (categories);
CREATE INDEX IF NOT EXISTS idx_communities_categories ON communities USING GIN (categories);
CREATE INDEX IF NOT EXISTS idx_organizations_categories ON organizations USING GIN (categories);
CREATE INDEX IF NOT EXISTS idx_user_tracking_user_id ON user_tracking(user_id);
CREATE INDEX IF NOT EXISTS idx_user_tracking_entity ON user_tracking(entity_type, entity_id);

-- Set up Row Level Security (RLS) policies
-- Enable RLS on all tables
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE tradeshows ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE communities ENABLE ROW LEVEL SECURITY;
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_tracking ENABLE ROW LEVEL SECURITY;

-- User profiles policy: users can only read/update their own profile
CREATE POLICY user_profiles_policy ON user_profiles
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

-- Public entities policies: anyone can read public entities
CREATE POLICY tradeshows_select_policy ON tradeshows FOR SELECT USING (true);
CREATE POLICY publications_select_policy ON publications FOR SELECT USING (true);
CREATE POLICY communities_select_policy ON communities FOR SELECT USING (true);
CREATE POLICY organizations_select_policy ON organizations FOR SELECT USING (true);

-- User tracking policy: users can only read/write their own tracking data
CREATE POLICY user_tracking_policy ON user_tracking
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Create a function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, avatar_url)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to automatically create a user profile when a new user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user(); 