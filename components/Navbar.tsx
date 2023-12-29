"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { FaBars, FaXmark } from 'react-icons/fa6';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('routeChangeComplete', handleRouteChange);

    return () => {
      window.removeEventListener('routeChangeComplete', handleRouteChange);
    };
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'AboutUs', path: '/aboutus' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {isMobile ? (
        <nav className='md:hidden bg-primary p-4'>
          <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-96 items-center'>
              <Link href='/'>
                <div className='text-2xl font-semibold flex items-center'>
                  <Image
                    src='/logo.png'
                    alt='logo'
                    width='400'
                    height='350'
                    className='inline-block items-center mr-5'
                  />
                </div>
              </Link>
              <div className='md:hidden'>
                <button onClick={toggleMobileMenu} className='text-white'>
                  {isMobileMenuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className='bg-primary md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
          <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-96 items-center'>
              <Link href='/'>
                <div className='text-2xl font-semibold flex items-center'>
                  <Image
                    src='/logo.png'
                    alt='logo'
                    width='400'
                    height='350'
                    className='inline-block items-center mr-5'
                  />
                </div>
              </Link>
              <ul className='md:flex space-x-12'>
                {navItems.map(({ label, path }) => (
                  <li key={label}>
                    <Link href={path}>
                      <div className='block hover:text-white-300'>{label}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      )}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} navItems={navItems} />
      <hr className='border-b-1 border-white' />
    </>
  );
};

export default Navbar;