import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'AboutUs', path: '/aboutus' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className='bg-primary md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
          <div className='flex space-x-96 items-center'>
            <Link href='/'>
              <div className='text-2xl font-semibold flex items-center'>
                <Image src='/logo.png' alt='logo' width='400' height='350' className='inline-block items-center mr-5' />
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
          <div className='md-hidden'></div>
        </div>
      </nav>
      <hr className='border-b-1 border-white' />
    </>
  );
};

export default Navbar;





















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