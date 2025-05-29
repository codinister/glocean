'use client';

import { useQuery } from 'react-query';
import fetch from '../axios/fetch';

const useGetQuery = (url: string, key: string) => {
  const fn = () => fetch({ url });

  const res = useQuery(key, fn);

  return res?.data?.data || [];
};

export default useGetQuery;
