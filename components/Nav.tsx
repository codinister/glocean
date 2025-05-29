'use client';

import useGetQuery from '@/data/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation'

const Nav = () => {
  const data = useGetQuery('/settings', 'settings');
  const path = usePathname()

  


  return (
    <nav>
      <div className="container navbar">
        <div>
          {data[0]?.image ? (
            <Image src={data[0]?.image} alt="logo" width="100" height="70" />
          ) : (
            ''
          )}
        </div>
        <div>
          <ul>
            <li>
              <Link className={path === '/' ? 'active' : ''} href="/">Home</Link>
            </li>
            <li>
              <Link className={path === '/about' ? 'active' : ''} href="/about">About</Link>
            </li>
            <li>
              <Link className={path === '/contact' ? 'active' : ''} href="/contact">Contact</Link>
            </li>
            <li>
              <Link className={path === '/track' ? 'active' : ''} href="/track">Track Shipment</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="backdrop"></div>

      <div className="hamburger">
        <div>
          <Image src="/hamburger.jpg" alt="Hamburger" width="5" height="5" />
        </div>
        <div>{data[9]?.comp_name}</div>
      </div>
    </nav>
  );
};

export default Nav;
