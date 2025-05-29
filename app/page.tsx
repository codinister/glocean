'use client'

import Herosection from "@/components/sections/Herosection";
import useGetQuery from "@/data/query/useGetQuery";

export default function Home() {

  const data = useGetQuery('/sections','sections')


  return (
    <>
    <Herosection data={data[3]} />
    
    </>
  );
}
