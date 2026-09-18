'use client';

import dynamic from 'next/dynamic';

const LocationMap = dynamic(() => import('@/components/LocationMap'), {
  ssr: false,
  loading: () => <div className="h-96 w-full animate-pulse rounded-sm bg-[#1B2A38]/5" />,
});

export default function ContactMap() {
  return <LocationMap />;
}