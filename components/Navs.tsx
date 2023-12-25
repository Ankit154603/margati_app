// Navs.js
import React from 'react';
import Link from 'next/link';

const Navs = () => {
  return (
    <>
      <div className="md:px-20 py-12 max-w-screen-2xl mx-auto mt-28">
        <nav>
          <ul>
            <li>
              <Link href="/">
              Home 
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
              About Us
              </Link>
            </li>
            <li>
              <Link href="/careers">
              Careers
              </Link>
            </li>
            <li>
              <Link href="/contact">
              Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navs;
