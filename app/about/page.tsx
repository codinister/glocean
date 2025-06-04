'use client';

import Enquiry from '@/components/sections/Enquiry';
import Herosection from '@/components/sections/Herosection';
import Sectionfour from '@/components/sections/Sectionfour';
import Sectionthree from '@/components/sections/Sectionthree';
import Sectiontwo from '@/components/sections/Sectiontwo';
import useGetQuery from '@/data/query/useGetQuery';

export default function About() {
  const data = useGetQuery('/sections', 'sections');

  return (
    <>
      <Herosection data={data[3]} />
      <Sectiontwo data={data[1]} />
      <Sectionthree data={data[2]} />
      <Sectionfour data={data[0]} />
      <Enquiry />
    </>
  );
}
