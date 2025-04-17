# Manufacturing Ecosystem Hub (MFG Hub)

A centralized hub for discovering and tracking key players in the manufacturing ecosystem. This platform enables sales and marketing teams to easily find relevant tradeshows, publications, communities, and organizations, enhancing their go-to-market strategies.

## Features

- **Comprehensive Database**: Access a curated database of manufacturing tradeshows, publications, communities, and organizations
- **Search & Filter**: Easily find relevant entities based on categories, dates, and other criteria
- **Tracking System**: Save and organize entities of interest for easy reference
- **User Profiles**: Personalized experience with saved preferences and tracked items
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, TailwindCSS, Shadcn UI
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mfg.git
   cd mfg
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Supabase credentials:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEXT_PUBLIC_APP_NAME=Manufacturing Hub
   ```

4. Set up your Supabase database:

   - Create a new Supabase project
   - Run the SQL scripts in the `supabase/schema.sql` file to create the database schema
   - Run the SQL scripts in the `supabase/seed.sql` file to populate the database with sample data

5. Start the development server:

   ```bash
   supabase start
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Database Schema

The application uses the following database tables:

- **user_profiles**: User information and preferences
- **tradeshows**: Manufacturing industry tradeshows and events
- **publications**: Industry publications, magazines, and journals
- **communities**: Online and in-person manufacturing communities
- **organizations**: Industry associations, consortiums, and organizations
- **user_tracking**: Tracks which entities users have saved/favorited

## Project Structure

```
mfg/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app router pages
│   │   ├── (auth)/      # Authentication pages (login, register)
│   │   ├── (dashboard)/ # Dashboard and entity pages
│   ├── components/      # React components
│   │   ├── dashboard/   # Dashboard-specific components
│   │   ├── layout/      # Layout components
│   │   ├── ui/          # Shadcn UI components
│   ├── lib/             # Utility functions and libraries
│   │   ├── supabase/    # Supabase client and API functions
│   ├── types/           # TypeScript type definitions
├── supabase/            # Supabase configuration and SQL scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Supabase](https://supabase.io/)
- [Lucide Icons](https://lucide.dev/)
