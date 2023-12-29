// import Image from 'next/image';
// import Link from 'next/link';
// import { FaBars, FaXmark } from "react-icons/fa6";

// const Navbar = () => {
//   const navItems = [
//     { label: 'Home', path: '/' },
//     { label: 'AboutUs', path: '/aboutus' },
//     { label: 'Careers', path: '/careers' },
//     { label: 'Contact', path: '/contact' },
//   ];

//   return (
//     <>
      // <nav className='bg-primary md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
      //   <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
      //     <div className='flex space-x-96 items-center'>
      //       <Link href='/'>
      //         <div className='text-2xl font-semibold flex items-center'>
      //           <Image src='/logo.png' alt='logo' width='400' height='350' className='inline-block items-center mr-5' />
      //         </div>
      //       </Link>
      //       <ul className='md:flex space-x-12'>
      //         {navItems.map(({ label, path }) => (
      //           <li key={label}>
      //             <Link href={path}>
      //               <div className='block hover:text-gray-300'>{label}</div>
      //             </Link>
      //           </li>
      //         ))}
      //       </ul>
      //     </div>
      //     <div className='md-hidden'></div>
      //   </div>
      // </nav>
      // <hr className='border-b-1 border-white' />
//     </>
//   );
// };

// export default Navbar;


"use client"
// components/Navbar.js
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
                <button onClick={toggleMobileMenu}>
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
                      <div className='block hover:text-gray-300'>{label}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Menu (Client-side rendering) */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} navItems={navItems} />
      <hr className='border-b-1 border-white' />
    </>
  );
};

export default Navbar;





// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import {useClient} from '../app/layout';

// const Navbar = () => {
//   const navItems = [
//     { label: 'Home', path: '/' },
//     { label: 'AboutUs', path: '/aboutus' },
//     { label: 'Careers', path: '/careers' },
//     { label: 'Contact', path: '/contact' },
//   ];

//   const [isMobileMenuOpen, setMobileMenuOpen] = useClient(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <nav className='bg-primary md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
//         <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
//           <div className='flex items-center'>
//             <Link href='/'>
//               <div className='text-2xl font-semibold flex items-center cursor-pointer'>
//                 <Image src='/logo.png' alt='logo' width='40' height='40' className='inline-block items-center mr-5' />
//               </div>
//             </Link>
//             <button
//               type='button'
//               className='md:hidden text-white focus:outline-none'
//               onClick={toggleMobileMenu}
//             >
//               {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//             </button>
//           </div>
//           <ul
//             className={`${
//               isMobileMenuOpen ? 'flex' : 'hidden'
//             } md:flex md:space-x-12 flex-col md:flex-row space-y-2 md:space-y-0 md:items-center`}
//           >
//             {navItems.map(({ label, path }) => (
//               <li key={label}>
//                 <Link href={path}>
//                   <div className='block hover:text-gray-300'>{label}</div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//       <hr className='border-b-1 border-white' />
//     </>
//   );
// };

// export default Navbar;




















// import Image from 'next/image';
// import Link from 'next/link';
// import { FaBars, FaXmark } from 'react-icons/fa6';
// import { useClient } from 'next/react';

// const Navbar = () => {
//   // Wrap the component logic with useClient
//   useClient(() => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//       setIsMenuOpen(!isMenuOpen);
//     };

//     const navItems = [
//       { label: 'Home', path: '/' },
//       { label: 'About Us', path: '/aboutus' },
//       { label: 'Careers', path: '/careers' },
//       { label: 'Contact', path: '/contact' },
//     ];

//     return (
//       <>
//         <nav className='bg-primary md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
//           <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
//             <div className='flex items-center'>
//               <Link href='/'>
//                 <div className='text-2xl font-semibold flex items-center'>
//                   <Image src='/logo.png' alt='logo' width='400' height='350' className='inline-block items-center mr-5' />
//                 </div>
//               </Link>
//             </div>
//             <div className='md:hidden'>
//               {isMenuOpen ? (
//                 <FaXmark onClick={toggleMenu} className='text-3xl cursor-pointer' />
//               ) : (
//                 <FaBars onClick={toggleMenu} className='text-3xl cursor-pointer' />
//               )}
//             </div>
//             <ul className={`md:flex space-x-12 ${isMenuOpen ? 'block' : 'hidden'}`}>
//               {navItems.map(({ label, path }) => (
//                 <li key={label}>
//                   <Link href={path}>
//                     <div className='block hover:text-gray-300' onClick={() => setIsMenuOpen(false)}>
//                       {label}
//                     </div>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>
//         <hr className='border-b-1 border-white' />
//       </>
//     );
//   });
// };

// export default Navbar;














// import Image from 'next/image'
// import Link from 'next/link';
// import { FaBars, FaXmark } from "react-icons/fa6";
// const Navbar = () => {
//   const navItems = [
//     {Link: "Home", path: "/"},
//     {Link: "Aboutus", path: "/aboutus"},
//     {Link: "Careers", path: "/careers"},
//     {Link: "Contact", path: "/contact"},
//   ]
//   return ( 
//     <>
//    <nav className='bg-primary md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
//     <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
//       <div className='flex space-x-96 items-center'>
//         <a href='/' className='text-2xl font-semibold flex items-center'>
//           <Image src="/logo.png" alt='logo' width="400" height="350" className='inline-block items-center mr-5'>
//           </Image>
//           </a>
//           <ul className='md:flex space-x-12'>
//             {
//               navItems.map(({Link,path}) => <a key={Link} href={path} className='block hover:text-gray-300'>{Link}</a>)
//             }
//           </ul>
//       </div>
//       <div className='md-hidden'> 
//       </div>
//     </div>
//    </nav>
//    <hr className='border-b-1 border-white' />
//    </>
//   )
// }

// export default Navbar;