// import React from 'react'
// import Image from 'next/image'
// import Navbar from '@/components/Navbar'
// import { FiSmartphone } from "react-icons/fi";
// import { SlEnvolope } from "react-icons/sl";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import Footer from '@/components/Footer';

// const page = () => {
//   return (
//     <div>
//       <Navbar />
// <div className="max-w-screen-2xl mx-auto">
//   <div className='text-white'>
//     <div className="md:px-20 py-12 max-w-screen-2xl mx-auto mt-0">
//         <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
//           <div className='px-10'> 
//             <div className='mr-10 mb-96'>
//               <Image src="/contacts.png" alt='logo' width="502" height="448" className='inline-block items-center mt-20 mb-20' />
//             </div>
//           </div>
//           <div className="md:w-5/5">
//             <h2 className='md:text-4xl font-bold text-[#000000] mb-6 leading-relaxed mt-24'>Get in touch</h2> 
//             <p className='text-2md text-[#000000] mb-6'>Lorem ipsum dolor sit amet consectetur. <br />
//              Eu odio aenean diam proin tellus montes et sed fusce.</p>
//              <div className='text-black inline-block flex-initial'> 
//              <p className='inline-flex'> 
//              <div className='mr-2'>
//               <FiSmartphone style={{ fontSize: '36px' }} /> 
//              </div>
//               +91-999 999 9999
//               </p>
//               <div>
//               <p className='inline-flex'> 
//              <div className='mr-2'>
//               <SlEnvolope style={{ fontSize: '36px' }} /> 
//              </div>
//               margati@abc.com
//               </p>
//               </div>
//               <div>
//               <p className='inline-flex'> 
//              <div className='mr-2 mt-2'>
//               <HiOutlineLocationMarker style={{ fontSize: '36px' }} /> 
//              </div>
//              Lorem ipsum dolor sit amet consectetur. 
//                 <br />
//                Eu odio aenean diam
//               </p>
//               </div>
//              </div>
//              <div className='mt-20 shadow-2xl px-10 py-10 rounded-2xl'>
//   <h2 className='md:text-4xl font-bold text-[#000000] mb-6 leading-relaxed'>Say something</h2>
//   <div>
//     <div className='border-solid border-2 border-[#DCE375] p-4 rounded-2xl md:my-8'>
//       <input type="text" className='h-12 rounded-sm pl-4 text-black' placeholder='Your Name'/>
//     </div>
//     <div className='border-solid border-2 border-[#DCE375] p-4 rounded-2xl md:my-8'>
//       <input type="text" className='h-12 rounded-sm pl-4 text-black' placeholder='Your Email'/>
//     </div>
//     <div className='border-solid border-2 border-[#DCE375] p-20 rounded-2xl md:my-8'>
//       <div className='mr-14'>
//       <input type="text" className='h-20 rounded-sm pl-2 text-black ' placeholder='Message'/>
//       </div>
//       </div>
//                         <button className='py-6 px-64 bg-secondary font-semibold text-white rounded-lg hover:bg-secondary transition-all duration-400'>
//                           <p>Send</p></button>
//                     </div> 
//     </div>
//   </div>
//           </div> 
//         </div>
//       </div>
//       <Footer />
//     </div>
//     </div>
//   )
// }

// export default page



import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { FiSmartphone } from 'react-icons/fi';
import { SlEnvolope } from 'react-icons/sl';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Footer from '@/components/Footer';

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <div className="md:px-8 sm:px-4 py-8 max-w-screen-2xl mx-auto mt-0">
          <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
            <div className='px-4 md:px-0 mb-4 md:mb-0 md:mr-10'>
              <Image src="/contacts.png" alt='logo' width="502" height="448" className='inline-block items-center mt-4 mb-4' />
            </div>
            <div className="md:w-5/5 mx-28 mt-10">
              <h2 className='md:text-3xl sm:text-2xl font-bold text-[#000000] mb-4 leading-relaxed mt-8 sm:mt-4'>Get in touch</h2>
              <p className='text-sm sm:text-md text-[#000000] mb-4'>
                Lorem ipsum dolor sit amet consectetur. <br />
                Eu odio aenean diam proin tellus montes et sed fusce.
              </p>
              <div className='text-black inline-block flex-initial'>
                <p className='inline-flex items-center'>
                  <FiSmartphone style={{ fontSize: '24px' }} />
                  <span className='ml-2'>+91-999 999 9999</span>
                </p>
                <div className='mt-2'>
                  <p className='inline-flex items-center'>
                    <SlEnvolope style={{ fontSize: '24px' }} />
                    <span className='ml-2'>margati@abc.com</span>
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='inline-flex items-center'>
                    <HiOutlineLocationMarker style={{ fontSize: '24px' }} />
                    <span className='ml-2'>Lorem ipsum dolor sit amet consectetur. <br /> Eu odio aenean diam</span>
                  </p>
                </div>
              </div>
              <div className='mt-8 sm:mt-4 shadow-2xl px-4 md:px-10 py-8 rounded-2xl ml-4'>
                <h2 className='md:text-3xl sm:text-2xl font-bold text-[#000000] mb-4 leading-relaxed'>Say something</h2>
                <div>
                  <div className='border-solid border-2 border-[#DCE375] p-4 rounded-2xl mb-4'>
                    <input type="text" className='h-12 sm:h-10 rounded-sm pl-4 text-black w-full' placeholder='Your Name' />
                  </div>
                  <div className='border-solid border-2 border-[#DCE375] p-4 rounded-2xl mb-4'>
                    <input type="text" className='h-12 sm:h-10 rounded-sm pl-4 text-black w-full' placeholder='Your Email' />
                  </div>
                  <div className='border-solid border-2 border-[#DCE375] p-4 rounded-2xl'>
                    <input type="text" className='h-20 sm:h-16 rounded-sm pl-2 text-black w-full' placeholder='Message' />
                  </div>
                </div>
                <button className='mt-8 py-6 px-40 sm:px-32 bg-secondary font-semibold text-white rounded-lg hover:bg-secondary transition-all duration-400'>
                  <p>Send</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
