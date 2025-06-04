'use client';

import Pageherosection from '@/components/sections/Pageherosection';
import Sectiontwo from '@/components/sections/Sectiontwo';
import useGetQuery from '@/data/query/useGetQuery';

export default function Track() {
  const data = useGetQuery('/sections', 'sections');

  return (
    <>
      <Pageherosection name="Global Package Tracking" />
      <section className="track">
        <div className="container">
          <div>
            Track packages from China, US Post, Canada Post, Royal Mail,
            Deutsche Post, Aliexpress, UPS, Shein, FedEx, Temu, eBay, Amazon
          </div>

          <div>
            <div>
              <input type="text" placeholder="Enter tracking number" />
              <button>TRACK PACKAGE</button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <Sectiontwo data={data[1]} />
    </>
  );
}
