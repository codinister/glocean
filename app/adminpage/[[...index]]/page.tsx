'use client';

import { NextStudio } from 'next-sanity/studio';
import clientconfig from '@/data/sanity/client.config';

export default function AdminPage() {
  return (
    <div className="adminpage">
      <NextStudio config={clientconfig} />
    </div>
  );
}
