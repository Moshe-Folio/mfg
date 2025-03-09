'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type EntityCardProps = {
  id: string;
  name: string;
  description: string;
  type: 'tradeshow' | 'publication' | 'community' | 'organization';
  imageUrl?: string;
  metadata: Record<string, string>;
  isTracked?: boolean;
};

const EntityCard = ({
  id,
  name,
  description,
  type,
  imageUrl,
  metadata,
  isTracked = false,
}: EntityCardProps) => {
  const [tracked, setTracked] = useState(isTracked);

  const handleToggleTrack = () => {
    setTracked(!tracked);
    // In a real app, this would call an API to update the tracking status
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggleTrack();
    }
  };

  const getEntityPath = () => {
    switch (type) {
      case 'tradeshow':
        return `/tradeshows/${id}`;
      case 'publication':
        return `/publications/${id}`;
      case 'community':
        return `/communities/${id}`;
      case 'organization':
        return `/organizations/${id}`;
      default:
        return '#';
    }
  };

  return (
    <Card className="overflow-hidden">
      {imageUrl && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{name}</CardTitle>
          <button
            onClick={handleToggleTrack}
            onKeyDown={handleKeyDown}
            className="rounded-full p-2 hover:bg-gray-100"
            aria-label={tracked ? 'Untrack item' : 'Track item'}
            tabIndex={0}
          >
            <Star
              className={`h-5 w-5 ${
                tracked ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
              }`}
            />
          </button>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {Object.entries(metadata).map(([key, value]) => (
            <div key={key} className="flex justify-between text-sm">
              <span className="text-gray-500">{key}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={getEntityPath()} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EntityCard; 