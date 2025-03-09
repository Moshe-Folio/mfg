import { supabase } from './client';
import { Database } from './database.types';

// Types
type UserProfile = Database['public']['Tables']['user_profiles']['Row'];
type Tradeshow = Database['public']['Tables']['tradeshows']['Row'];
type Publication = Database['public']['Tables']['publications']['Row'];
type Community = Database['public']['Tables']['communities']['Row'];
type Organization = Database['public']['Tables']['organizations']['Row'];
type UserTracking = Database['public']['Tables']['user_tracking']['Row'];

// User Profile Operations
export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }

  return data;
};

export const updateUserProfile = async (userId: string, updates: Partial<UserProfile>): Promise<UserProfile | null> => {
  const { data, error } = await supabase
    .from('user_profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating user profile:', error);
    return null;
  }

  return data;
};

// Tradeshow Operations
export const getTradeshows = async (
  page = 1,
  limit = 10,
  search?: string,
  categories?: string[]
): Promise<{ data: Tradeshow[]; count: number }> => {
  let query = supabase.from('tradeshows').select('*', { count: 'exact' });

  // Apply search filter if provided
  if (search) {
    query = query.ilike('name', `%${search}%`);
  }

  // Apply categories filter if provided
  if (categories && categories.length > 0) {
    query = query.contains('categories', categories);
  }

  // Apply pagination
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  
  const { data, error, count } = await query
    .order('start_date', { ascending: true })
    .range(from, to);

  if (error) {
    console.error('Error fetching tradeshows:', error);
    return { data: [], count: 0 };
  }

  return { data: data || [], count: count || 0 };
};

export const getTradeshow = async (id: string): Promise<Tradeshow | null> => {
  const { data, error } = await supabase
    .from('tradeshows')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching tradeshow:', error);
    return null;
  }

  return data;
};

// Publication Operations
export const getPublications = async (
  page = 1,
  limit = 10,
  search?: string,
  categories?: string[]
): Promise<{ data: Publication[]; count: number }> => {
  let query = supabase.from('publications').select('*', { count: 'exact' });

  // Apply search filter if provided
  if (search) {
    query = query.ilike('name', `%${search}%`);
  }

  // Apply categories filter if provided
  if (categories && categories.length > 0) {
    query = query.contains('categories', categories);
  }

  // Apply pagination
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  
  const { data, error, count } = await query
    .order('name')
    .range(from, to);

  if (error) {
    console.error('Error fetching publications:', error);
    return { data: [], count: 0 };
  }

  return { data: data || [], count: count || 0 };
};

export const getPublication = async (id: string): Promise<Publication | null> => {
  const { data, error } = await supabase
    .from('publications')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching publication:', error);
    return null;
  }

  return data;
};

// Community Operations
export const getCommunities = async (
  page = 1,
  limit = 10,
  search?: string,
  categories?: string[]
): Promise<{ data: Community[]; count: number }> => {
  let query = supabase.from('communities').select('*', { count: 'exact' });

  // Apply search filter if provided
  if (search) {
    query = query.ilike('name', `%${search}%`);
  }

  // Apply categories filter if provided
  if (categories && categories.length > 0) {
    query = query.contains('categories', categories);
  }

  // Apply pagination
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  
  const { data, error, count } = await query
    .order('name')
    .range(from, to);

  if (error) {
    console.error('Error fetching communities:', error);
    return { data: [], count: 0 };
  }

  return { data: data || [], count: count || 0 };
};

export const getCommunity = async (id: string): Promise<Community | null> => {
  const { data, error } = await supabase
    .from('communities')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching community:', error);
    return null;
  }

  return data;
};

// Organization Operations
export const getOrganizations = async (
  page = 1,
  limit = 10,
  search?: string,
  categories?: string[]
): Promise<{ data: Organization[]; count: number }> => {
  let query = supabase.from('organizations').select('*', { count: 'exact' });

  // Apply search filter if provided
  if (search) {
    query = query.ilike('name', `%${search}%`);
  }

  // Apply categories filter if provided
  if (categories && categories.length > 0) {
    query = query.contains('categories', categories);
  }

  // Apply pagination
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  
  const { data, error, count } = await query
    .order('name')
    .range(from, to);

  if (error) {
    console.error('Error fetching organizations:', error);
    return { data: [], count: 0 };
  }

  return { data: data || [], count: count || 0 };
};

export const getOrganization = async (id: string): Promise<Organization | null> => {
  const { data, error } = await supabase
    .from('organizations')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching organization:', error);
    return null;
  }

  return data;
};

// User Tracking Operations
export const getUserTrackedItems = async (
  userId: string,
  entityType?: 'tradeshow' | 'publication' | 'community' | 'organization'
): Promise<UserTracking[]> => {
  let query = supabase
    .from('user_tracking')
    .select('*')
    .eq('user_id', userId);

  if (entityType) {
    query = query.eq('entity_type', entityType);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching user tracked items:', error);
    return [];
  }

  return data || [];
};

export const trackEntity = async (
  userId: string,
  entityType: 'tradeshow' | 'publication' | 'community' | 'organization',
  entityId: string,
  notes?: string
): Promise<UserTracking | null> => {
  const { data, error } = await supabase
    .from('user_tracking')
    .insert({
      user_id: userId,
      entity_type: entityType,
      entity_id: entityId,
      notes
    })
    .select()
    .single();

  if (error) {
    console.error('Error tracking entity:', error);
    return null;
  }

  return data;
};

export const untrackEntity = async (
  userId: string,
  entityType: 'tradeshow' | 'publication' | 'community' | 'organization',
  entityId: string
): Promise<boolean> => {
  const { error } = await supabase
    .from('user_tracking')
    .delete()
    .eq('user_id', userId)
    .eq('entity_type', entityType)
    .eq('entity_id', entityId);

  if (error) {
    console.error('Error untracking entity:', error);
    return false;
  }

  return true;
};

export const isEntityTracked = async (
  userId: string,
  entityType: 'tradeshow' | 'publication' | 'community' | 'organization',
  entityId: string
): Promise<boolean> => {
  const { data, error } = await supabase
    .from('user_tracking')
    .select('id')
    .eq('user_id', userId)
    .eq('entity_type', entityType)
    .eq('entity_id', entityId)
    .single();

  if (error) {
    // If error is 'No rows found', it means the entity is not tracked
    if (error.code === 'PGRST116') {
      return false;
    }
    console.error('Error checking if entity is tracked:', error);
    return false;
  }

  return !!data;
}; 