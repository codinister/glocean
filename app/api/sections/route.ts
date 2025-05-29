import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';
import serverConfig from '@/data/sanity/server.config';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const res = await serverConfig.fetch(
      groq`
    *[_type == 'sections']{
        'mainsection': mainsection{
            ...,
            "body": body[]{
            ..., 
            asset->{
              ...,
              "_key": _id
            }
          },
          'image': image.asset->url,
          "excerpt": array::join(string::split((pt::text(body)), "")[0..100], "") + "..."
        },
      'subsection': subsection[]{
            ...,
            "body": body[]{
            ..., 
            asset->{
              ...,
              "_key": _id
            }
          },
          'image': image.asset->url,
          "excerpt": array::join(string::split((pt::text(body)), "")[0..100], "") + "..."
      }
      
    }
    `
    );
    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}
