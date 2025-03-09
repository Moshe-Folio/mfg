export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          company: string | null
          job_title: string | null
          bio: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          company?: string | null
          job_title?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          company?: string | null
          job_title?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      tradeshows: {
        Row: {
          id: string
          name: string
          description: string | null
          website: string | null
          location: string | null
          start_date: string | null
          end_date: string | null
          categories: string[]
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          website?: string | null
          location?: string | null
          start_date?: string | null
          end_date?: string | null
          categories?: string[]
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          website?: string | null
          location?: string | null
          start_date?: string | null
          end_date?: string | null
          categories?: string[]
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      publications: {
        Row: {
          id: string
          name: string
          description: string | null
          website: string | null
          type: 'Magazine' | 'Journal' | 'Blog' | 'Newsletter' | 'Other' | null
          frequency: string | null
          categories: string[]
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          website?: string | null
          type?: 'Magazine' | 'Journal' | 'Blog' | 'Newsletter' | 'Other' | null
          frequency?: string | null
          categories?: string[]
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          website?: string | null
          type?: 'Magazine' | 'Journal' | 'Blog' | 'Newsletter' | 'Other' | null
          frequency?: string | null
          categories?: string[]
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      communities: {
        Row: {
          id: string
          name: string
          description: string | null
          website: string | null
          type: 'Online' | 'In-person' | 'Hybrid' | null
          size: string | null
          categories: string[]
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          website?: string | null
          type?: 'Online' | 'In-person' | 'Hybrid' | null
          size?: string | null
          categories?: string[]
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          website?: string | null
          type?: 'Online' | 'In-person' | 'Hybrid' | null
          size?: string | null
          categories?: string[]
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      organizations: {
        Row: {
          id: string
          name: string
          description: string | null
          website: string | null
          type: 'Association' | 'Consortium' | 'Non-profit' | 'Government' | 'Other' | null
          size: string | null
          categories: string[]
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          website?: string | null
          type?: 'Association' | 'Consortium' | 'Non-profit' | 'Government' | 'Other' | null
          size?: string | null
          categories?: string[]
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          website?: string | null
          type?: 'Association' | 'Consortium' | 'Non-profit' | 'Government' | 'Other' | null
          size?: string | null
          categories?: string[]
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_tracking: {
        Row: {
          id: string
          user_id: string
          entity_type: 'tradeshow' | 'publication' | 'community' | 'organization'
          entity_id: string
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          entity_type: 'tradeshow' | 'publication' | 'community' | 'organization'
          entity_id: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          entity_type?: 'tradeshow' | 'publication' | 'community' | 'organization'
          entity_id?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 