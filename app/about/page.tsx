'use client';


import Pageherosection from '@/components/sections/Pageherosection';
import Sectionfive from '@/components/sections/Sectionfive';
import Sectionfour from '@/components/sections/Sectionfour';
import Sectionthree from '@/components/sections/Sectionthree';
import Sectiontwo from '@/components/sections/Sectiontwo';
import useGetQuery from '@/data/query/useGetQuery';

export default function About() {
  const data = useGetQuery('/sections', 'sections');

  return (
    <>
      <Pageherosection name="About Us" />
      <Sectiontwo data={data[1]} />
      <Sectionthree data={data[3]} />
      <Sectionfive data={data[2]} />
      <Sectionfour data={data[0]} />
    </>
  );
}
