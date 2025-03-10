-- Create a table for communities & influencers
CREATE TABLE IF NOT EXISTS communities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  website TEXT,
  description TEXT,
  platform TEXT CHECK (platform IN ('LinkedIn', 'Twitter', 'YouTube', 'Reddit', 'Website', 'Other')),
  followers_count INTEGER,
  categories TEXT[] DEFAULT '{}',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_communities_categories ON communities USING GIN (categories);
CREATE INDEX IF NOT EXISTS idx_communities_platform ON communities (platform);
CREATE INDEX IF NOT EXISTS idx_communities_followers ON communities (followers_count);

-- Enable Row Level Security
ALTER TABLE communities ENABLE ROW LEVEL SECURITY;

-- Public access policy - anyone can read communities
CREATE POLICY communities_select_policy ON communities 
  FOR SELECT USING (true);

-- Admin access policy - only admins can insert, update, delete
CREATE POLICY communities_insert_policy ON communities 
  FOR INSERT WITH CHECK (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  );

CREATE POLICY communities_update_policy ON communities 
  FOR UPDATE USING (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  );

CREATE POLICY communities_delete_policy ON communities 
  FOR DELETE USING (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  ); 