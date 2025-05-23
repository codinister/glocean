'use client';

import { defineConfig } from 'sanity';
import { schemaTypes } from './schemaTypes';
import { structureTool } from 'sanity/structure';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '';
export default defineConfig({
  projectId,
  dataset: 'production',
  title: 'GLOCEAN',
  basePath: '/adminpage',
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()],
});
