'use client';

import useGetQuery from '@/data/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Nav = () => {
  const data = useGetQuery('/settings', 'settings');
  const path = usePathname();
  const [visibility, setVisibility] = useState('hide');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrolly = window.scrollY;
    const scroll = Math.floor(scrolly);
    if (scroll > 150) {
      document.querySelector('nav')?.classList.add('navbg');
    } else {
      document.querySelector('nav')?.classList.remove('navbg');
    }
  };

  return (
    <nav>
      <div className={`container navbar ${visibility}`}>
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
              <Link
                className={path === '/' ? 'active' : ''}
                href="/"
                onClick={() => setVisibility('hide')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={path === '/about' ? 'active' : ''}
                href="/"
                onClick={() => setVisibility('hide')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={path === '/' ? 'active' : ''}
                href="/contact"
                onClick={() => setVisibility('hide')}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={path === '/track' ? 'active' : ''}
                href="/"
                onClick={() => setVisibility('hide')}
              >
                Track Shipment
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        onClick={() => setVisibility('hide')}
        className={`backdrop ${visibility}`}
      ></div>

      <div className="hamburger">
        <div>
          <Image
            src="/hamburger.jpg"
            alt="Hamburger"
            width="30"
            height="30"
            onClick={() => setVisibility('show')}
          />
        </div>
        <div>{data[0]?.company_name}</div>
      </div>
    </nav>
  );
};

export default Nav;
