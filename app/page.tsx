'use client';

import Enquiry from '@/components/sections/Enquiry';
import Herosection from '@/components/sections/Herosection';
import Sectionfour from '@/components/sections/Sectionfour';
import Sectionthree from '@/components/sections/Sectionthree';
import Sectiontwo from '@/components/sections/Sectiontwo';
import useGetQuery from '@/data/query/useGetQuery';

export default function Home() {
  const data = useGetQuery('/sections', 'sections');

  return (
    <>
      <Herosection data={data[4]} />
      <Sectiontwo data={data[1]} />
      <Sectionthree data={data[3]} />
      <Sectionfour data={data[0]} />
      <Enquiry />
    </>
  );
}
