# Supabase Database Setup

This directory contains SQL scripts for setting up the database schema and seed data for the Manufacturing Ecosystem Hub.

## Directory Structure

```
supabase/
├── schema.sql             # Main schema file that includes all table creation scripts
├── seed.sql               # Main seed file that includes all seed data
├── tables/                # Individual table creation scripts
│   ├── user_profiles.sql  # User profiles table with RLS
│   ├── tradeshows.sql     # Tradeshows table with RLS
│   ├── publications.sql   # Publications table with RLS
│   ├── communities.sql    # Communities table with RLS
│   ├── organizations.sql  # Organizations table with RLS
│   └── user_tracking.sql  # User tracking table with RLS
└── seeds/                 # Individual seed data files
    ├── tradeshows_seed.sql
    ├── publications_seed.sql
    ├── communities_seed.sql
    └── organizations_seed.sql
```

## Setup Instructions

1. Create a new Supabase project at [https://app.supabase.io](https://app.supabase.io)
2. Go to the SQL Editor in your Supabase dashboard
3. Run the `schema.sql` script to create all tables with proper Row Level Security (RLS) policies
4. Run the `seed.sql` script to populate the tables with sample data

## Database Schema

### User Profiles

- Stores user information and preferences
- RLS: Users can only read/write their own profile

### Tradeshows

- Stores information about manufacturing tradeshows and events
- Fields: name, website, description, location, dates, etc.
- RLS: Anyone can read, only admins can write

### Publications

- Stores information about industry publications and podcasts
- Fields: name, website, description, format, frequency, etc.
- RLS: Anyone can read, only admins can write

### Communities

- Stores information about manufacturing communities and influencers
- Fields: name, website, description, platform, followers count, etc.
- RLS: Anyone can read, only admins can write

### Organizations

- Stores information about industry organizations and associations
- Fields: name, website, description, membership type, global reach, etc.
- RLS: Anyone can read, only admins can write

### User Tracking

- Tracks which entities users have saved/favorited
- RLS: Users can only read/write their own tracking data

## Row Level Security (RLS)

All tables have Row Level Security enabled with appropriate policies:

- Public data (tradeshows, publications, communities, organizations) can be read by anyone
- User-specific data (user profiles, user tracking) can only be accessed by the respective user
- Only admin users can insert, update, or delete public data

## Admin Access

Admin access is determined by email domain. In the current setup, users with email addresses ending in `@yourdomain.com` are considered admins. Update this in the RLS policies to match your organization's email domain.
