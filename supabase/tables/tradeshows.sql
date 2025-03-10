-- Create a table for tradeshows & expos
CREATE TABLE IF NOT EXISTS tradeshows (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  website TEXT,
  description TEXT,
  location TEXT,
  city TEXT,
  country TEXT,
  continent TEXT,
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  categories TEXT[] DEFAULT '{}',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_tradeshows_categories ON tradeshows USING GIN (categories);
CREATE INDEX IF NOT EXISTS idx_tradeshows_location ON tradeshows (country, city);
CREATE INDEX IF NOT EXISTS idx_tradeshows_dates ON tradeshows (start_date, end_date);

-- Enable Row Level Security
ALTER TABLE tradeshows ENABLE ROW LEVEL SECURITY;

-- Public access policy - anyone can read tradeshows
CREATE POLICY tradeshows_select_policy ON tradeshows 
  FOR SELECT USING (true);

-- Admin access policy - only admins can insert, update, delete
CREATE POLICY tradeshows_insert_policy ON tradeshows 
  FOR INSERT WITH CHECK (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  );

CREATE POLICY tradeshows_update_policy ON tradeshows 
  FOR UPDATE USING (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  );

CREATE POLICY tradeshows_delete_policy ON tradeshows 
  FOR DELETE USING (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE email IN (
        SELECT email FROM auth.users WHERE auth.jwt() ->> 'email' LIKE '%@yourdomain.com'
      )
    )
  ); 