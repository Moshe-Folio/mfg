import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar, Search, Filter } from 'lucide-react';
import EntityCard from '@/components/dashboard/EntityCard';

// Sample data - in a real app, this would come from Supabase
const tradeshows = [
  {
    id: '1',
    name: 'International Manufacturing Technology Show',
    description: 'One of the largest industrial trade shows in the world, featuring manufacturing technology.',
    imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    metadata: {
      Location: 'Chicago, IL',
      Dates: 'Sep 12-17, 2023',
      Attendees: '~115,000',
    },
  },
  {
    id: '2',
    name: 'FABTECH',
    description: 'North America\'s largest metal forming, fabricating, welding and finishing event.',
    imageUrl: 'https://images.unsplash.com/photo-1565098772267-60af42b81ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    metadata: {
      Location: 'Atlanta, GA',
      Dates: 'Nov 8-10, 2023',
      Attendees: '~50,000',
    },
  },
  {
    id: '3',
    name: 'Manufacturing & Technology Show',
    description: 'The premier event for manufacturing professionals looking to explore the latest technology innovations.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    metadata: {
      Location: 'Cleveland, OH',
      Dates: 'Jun 20-22, 2023',
      Attendees: '~6,000',
    },
  },
  {
    id: '4',
    name: 'PACK EXPO International',
    description: 'The world\'s largest packaging trade show connecting professionals from consumer packaged goods companies.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    metadata: {
      Location: 'Las Vegas, NV',
      Dates: 'Oct 23-25, 2023',
      Attendees: '~30,000',
    },
  },
  {
    id: '5',
    name: 'Hannover Messe',
    description: 'The world\'s leading trade show for industrial technology, showcasing innovations and solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    metadata: {
      Location: 'Hannover, Germany',
      Dates: 'Apr 17-21, 2023',
      Attendees: '~200,000',
    },
  },
  {
    id: '6',
    name: 'Advanced Manufacturing East',
    description: 'The east coast\'s premier advanced manufacturing event, connecting manufacturing professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1533417379565-6104a7124582?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    metadata: {
      Location: 'New York, NY',
      Dates: 'Jun 13-15, 2023',
      Attendees: '~15,000',
    },
  },
];

export default function TradeshowsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tradeshows</h1>
        <p className="text-muted-foreground">
          Discover and track manufacturing tradeshows around the world
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search tradeshows..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>Date Range</span>
        </Button>
      </div>

      {/* Tradeshows Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tradeshows.map((tradeshow) => (
          <EntityCard
            key={tradeshow.id}
            id={tradeshow.id}
            name={tradeshow.name}
            description={tradeshow.description}
            type="tradeshow"
            imageUrl={tradeshow.imageUrl}
            metadata={tradeshow.metadata}
            isTracked={tradeshow.id === '1'} // Just for demo purposes
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-gray-100">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
} 