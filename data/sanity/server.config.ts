import { createClient } from 'next-sanity';

const projectId = process.env.SERVER_PROJECT_ID || '';
export default createClient({
  projectId,
  dataset: 'production',
  apiVersion: '2025-05-23',
  useCdn: true,
});
