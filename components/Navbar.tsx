import Image from 'next/image'
import { FaBars, FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const navItems = [
    {link: "Home", path: "home"},
    {link: "AboutUs", path: "aboutus"},
    {link: "Careers", path: "careers"},
    {link: "Contact", path: "contact"},
  ]
  return ( 
    <>
   <nav className='bg-primary md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
    <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
      <div className='flex space-x-96 items-center'>
        <a href='/' className='text-2xl font-semibold flex items-center'>
          <Image src="/logo.png" alt='logo' width="400" height="350" className='inline-block items-center mr-5'>
          </Image>
          </a>
          <ul className='md:flex space-x-12'>
            {
              navItems.map(({link,path}) => <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>)
            }
          </ul>
      </div>
      <div className='md-hidden'> 
      </div>
    </div>
   </nav>
   <hr className='border-b-1 border-white' />
   </>
  )
}

export default Navbar