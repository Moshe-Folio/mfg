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
CREATE INDEX IF NOT EXISTS idx_user_tracking_user_id ON user_tracking(user_id);
CREATE INDEX IF NOT EXISTS idx_user_tracking_entity ON user_tracking(entity_type, entity_id);

-- Enable Row Level Security
ALTER TABLE user_tracking ENABLE ROW LEVEL SECURITY;

-- User tracking policy: users can only read/write their own tracking data
CREATE POLICY user_tracking_select_policy ON user_tracking 
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY user_tracking_insert_policy ON user_tracking 
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY user_tracking_update_policy ON user_tracking 
  FOR UPDATE USING (user_id = auth.uid()) 
  WITH CHECK (user_id = auth.uid());

CREATE POLICY user_tracking_delete_policy ON user_tracking 
  FOR DELETE USING (user_id = auth.uid()); 