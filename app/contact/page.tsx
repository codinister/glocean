'use client';

import Map from '@/components/Map';
import Pageherosection from '@/components/sections/Pageherosection';
import useGetQuery from '@/data/query/useGetQuery';
import { IoLocationOutline } from 'react-icons/io5';
import { CiMobile4 } from 'react-icons/ci';

export default function Contact() {
  const data = useGetQuery('/settings', 'settings');

  return (
    <>
      <Pageherosection name="Contact Us" />
      <section className="contactus">
        <div className="container">
          <div>
            <p>Contact Us</p>
            <h2>Get in touch</h2>
            <div>
              At GL Ocean Shipping, we value every connection. Whether you are a
              prospective partner, client, or simply curious about our services,
              we are here to assist you. Our team is committed to delivering
              prompt, clear, and reliable communication—because in shipping,
              timing and trust matter most.
            </div>
          </div>
          <div>
            <div>
              <div>
                <IoLocationOutline />
              </div>
              <div>
                <h4>Address</h4>
                <div>
                  <p>{data[0]?.company_name}</p>
                  <p>{data[0]?.company_location}</p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <CiMobile4 />
              </div>
              <div>
                <h4>Contact Details</h4>
                <div>
                  <p>{data[0]?.email}</p>
                  <h4>{data[0]?.phone}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Map src={data[0]?.company_location} width="100%" height="350pz" />
        </div>
      </section>
    </>
  );
}
