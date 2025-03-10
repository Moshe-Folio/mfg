-- Create a table for publications & podcasts
CREATE TABLE IF NOT EXISTS publications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  website TEXT,
  description TEXT,
  format TEXT CHECK (format IN ('Print', 'Digital', 'Podcast', 'Mixed')),
  frequency TEXT,
  categories TEXT[] DEFAULT '{}',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_publications_categories ON publications USING GIN (categories);
CREATE INDEX IF NOT EXISTS idx_publications_format ON publications (format);
CREATE INDEX IF NOT EXISTS idx_publications_frequency ON publications (frequency);

-- Enable Row Level Security
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;

-- Public access policy - anyone can read publications
CREATE POLICY publications_select_policy ON publications 
  FOR SELECT USING (true);

-- Admin access policy - only admins can insert, update, delete
CREATE POLICY publications_insert_policy ON publications 
  FOR INSERT WITH CHECK (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  );

CREATE POLICY publications_update_policy ON publications 
  FOR UPDATE USING (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  );

CREATE POLICY publications_delete_policy ON publications 
  FOR DELETE USING (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  ); 