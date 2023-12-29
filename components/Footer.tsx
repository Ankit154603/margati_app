// import React from 'react'
// import Image from 'next/image'

// const Footer = () => {
//   return (

// <div>
//   <hr className='border-solid border-8 border-[#DCE375]' />

//   <div className='flex justify-center items-center mt-20'>
//     <Image src="/logo1.png" alt='logo' width="200" height="100" className='inline-block items-center' />
//   </div>

//   <h1 className='md:text-4xl text-3xl font bold text-[#000000] md: flex-row justify-center text-center mt-4'>Subscribe to our newsletter</h1>

//   <p className='text-2md text-[#000000] md: flex-row justify-center text-center mt-2'>
//     Be the first one to know about our updates. Unsubscribe whenever you like.
//   </p>

//   <div className='flex flex-col md:flex-row justify-between items-center gap-10 ml-96 mr-96 border-medium border-2 border-secondary rounded-md box-border'>
//     <p className="mb-4 mt-5 ml-2 text-xl">Enter your Email</p>
//     <button className='py-4 px-14 bg-secondary font-semibold text-white rounded-md transition-all duration-400 mb-2 mt-2 mr-2'>
//       Subscribe
//     </button>
//   </div>
// <div className='bg-secondary px-14 mt-28 flex justify-between items-center'>
//   <div>
//     <p className='text-xl text-white'>Connect with us</p>
//   </div>

//   <div className='flex gap-8 mr-96'>
//     <Image src="/facebook.svg" alt='logo' width="50" height="10" className='inline-block items-center mt-20 mb-20' />
//     <Image src="/instagram.svg" alt='logo' width="50" height="10" className='inline-block items-center mt-20 mb-20 ' />
//     <Image src="/telegram.svg" alt='logo' width="50" height="10" className='inline-block items-center mt-20 mb-20 ' />
//     <Image src="/youtube.svg" alt='logo' width="50" height="10" className='inline-block items-center mt-20 mb-20 ' />
//   </div>

//   <div>
//     <p className='text-sm mt-10 text-white'>@All Copyright Reserved 2023</p>
//   </div>
// </div>
//       </div>
//   )
// }

// export default Footer




import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <hr className='border-solid border-8 border-[#DCE375]' />

      <div className='flex justify-center items-center mt-20'>
        <Image src="/logo1.png" alt='logo' width="200" height="100" className='inline-block items-center' />
      </div>

      <h1 className='md:text-4xl text-3xl font-bold text-[#000000] md:flex-row justify-center text-center mt-4'>
        Subscribe to our newsletter
      </h1>

      <p className='text-2md text-[#000000] md:flex-row justify-center text-center mt-2'>
        Be the first one to know about our updates. Unsubscribe whenever you like.
      </p>

      <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:ml-20 md:mr-20 border-medium border-2 border-secondary rounded-md box-border'>
        <p className="mb-4 mt-5 ml-2 text-xl">Enter your Email</p>
        <button className='py-4 px-14 bg-secondary font-semibold text-white rounded-md transition-all duration-400 mb-2 mt-2 md:mr-2'>
          Subscribe
        </button>
      </div>

      <div className='bg-secondary px-4 sm:px-8 mt-8 md:flex md:justify-between md:items-center'>
        <div className='text-white'>
          <p className='text-xl'>Connect with us</p>
        </div>

        <div className='flex gap-4 mt-4 md:mt-0'>
          <Image src="/facebook.svg" alt='logo' width="30" height="30" className='inline-block' />
          <Image src="/instagram.svg" alt='logo' width="30" height="30" className='inline-block' />
          <Image src="/telegram.svg" alt='logo' width="30" height="30" className='inline-block' />
          <Image src="/youtube.svg" alt='logo' width="30" height="30" className='inline-block' />
        </div>

        <div className='text-sm mt-4 md:mt-0 text-white'>
          <p>@All Copyright Reserved 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
