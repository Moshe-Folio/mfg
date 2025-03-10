-- Create a table for organizations & associations
CREATE TABLE IF NOT EXISTS organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  website TEXT,
  description TEXT,
  membership_type TEXT CHECK (membership_type IN ('Individual', 'Corporate', 'Both')),
  global_reach TEXT CHECK (global_reach IN ('Global', 'National', 'Regional')),
  categories TEXT[] DEFAULT '{}',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_organizations_categories ON organizations USING GIN (categories);
CREATE INDEX IF NOT EXISTS idx_organizations_membership ON organizations (membership_type);
CREATE INDEX IF NOT EXISTS idx_organizations_reach ON organizations (global_reach);

-- Enable Row Level Security
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;

-- Public access policy - anyone can read organizations
CREATE POLICY organizations_select_policy ON organizations 
  FOR SELECT USING (true);

-- Admin access policy - only admins can insert, update, delete
CREATE POLICY organizations_insert_policy ON organizations 
  FOR INSERT WITH CHECK (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  );

CREATE POLICY organizations_update_policy ON organizations 
  FOR UPDATE USING (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  );

CREATE POLICY organizations_delete_policy ON organizations 
  FOR DELETE USING (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  ); 