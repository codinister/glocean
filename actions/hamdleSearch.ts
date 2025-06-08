'use server';
import serverConfig from '@/data/sanity/server.config';
import { groq } from 'next-sanity';
const hamdleSearch = async (search: string) => {
  try {
    const res = await serverConfig.fetch(
      groq`
      *[_type == 'customers' && trackingcode == "${search}"]{
      ...
      }
    `
    );

    if (Object.values(res).length > 0) {
      return { success: res[0] };
    } else {
      return { error: 'No result found!' };
    }
  } catch (err) {
    console.log(err);
  }
};

export default hamdleSearch;
