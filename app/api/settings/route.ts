import serverConfig from '@/data/sanity/server.config';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0
export async function GET() {
  try {
    const res = await serverConfig.fetch(groq`*[_type == 'settings']{
    ...,
    'image': image.asset->url
  }`);

    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}
