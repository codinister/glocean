'use client';

import { NextStudio } from 'next-sanity/studio';
import clientconfig from '@/data/sanity/client.config';

export default function AdminPage() {
  return <NextStudio config={clientconfig} />;
}
