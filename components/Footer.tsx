'use client';

import useGetQuery from '@/data/query/useGetQuery';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  const data = useGetQuery('/settings', 'settings');

  return (
    <footer>
      <div className="container">
        <div>
          <h5>Office</h5>

          <div>
            <div>
              <p>{data[0]?.company_name}</p>
              <p>{data[0]?.company_location}</p>
            </div>

            <div>{data[0]?.email}</div>

            <div>{data[0]?.phone}</div>
          </div>
        </div>
        <div>
          <h5>Links</h5>

          <div>
            <ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/track">Track Shipment</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h5>Get in Touch</h5>

          <div>
            <a href={data[0]?.facebook} target="_blank">
              <FaFacebookF />
            </a>
            <a href={data[0]?.twitter} target="_blank">
              <BsTwitterX />
            </a>
            <a href={data[0]?.instagram} target="_blank">
              <CiInstagram />
            </a>
          </div>
        </div>
      </div>

      <div>{data[0]?.company_name} &copy; 2025. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
