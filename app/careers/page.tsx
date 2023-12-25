import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const Page = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-screen-2xl mx-auto">
        <div className="text-white">
          <div className="md:px-4 sm:px-8 py-12 max-w-screen-2xl mx-auto mt-0">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="sm:w-full md:w-1/2">
                <div className="mr-10">
                  <Image src="/amico.png" alt="logo" width="502" height="448" className="inline-block items-center mt-20 mb-20" />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="md:text-4xl font-bold text-[#000000] mb-6 leading-relaxed ml-10">Join our growing team</h2>
                <p className="text-2md text-[#000000] mb-6 ml-10">
                  We love what we do and we do it with passion. <br />
                  We value the experimentation of <br /> the message and smart incentives.
                </p>
                <div>
                  <button className='py-3 px-8 bg-secondary font-semibold text-white rounded-xl hover:bg-secondary transition-all duration-400 ml-5'>
                    <p>See Current Openings</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
























// import React from 'react'
// import Image from 'next/image'
// import Navbar from '@/components/Navbar'

// const page = () => {
//   return (
//     <div>
//       <Navbar />
//        {/* <div className="max-w-screen-2xl mx-auto">
//         <div className='text-white'>
//         <div className=" md:px-20 py-12 max-w-screen-2xl mx-auto mt-0">
//             <div className=' border-solid border-8 border-[#DCE375] p-4 rounded-3xl'>
//           <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
//                 <div className="md:w-5/5">
//                 <h2 className='md:text-4xl font-bold text-[#000000] mb-6 leading-relaxed ml-10'>About us</h2> 
//                     <p className='text-2md text-[#000000] mb-6 ml-10'>Lorem ipsum dolor sit amet 
//                     consectetur. <br /> 
//                     Vitae odio ut eleifend nec id. Dignissim 
//                     <br /> purus convallis aliquam in aliquet. <br /> 
//                     Sapien proin molestie lectus ultricies. Ut <br />
//                      mattis facilisis .</p> 
//                 </div> 
//                 <div className='px-10'>
//                 <div className='mr-10'>
//                 <Image src="/arrow.png" alt='logo' width="502" height="448" className='inline-block items-center mt-20 mb-20'>
//           </Image>
//                     </div>
//                     </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div> */}

// <div className="max-w-screen-2xl mx-auto">
//   <div className='text-white'>
//     <div className="md:px-20 py-12 max-w-screen-2xl mx-auto mt-0">
//         <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
//           <div className='px-10'> 
//             <div className='mr-10'>
//               <Image src="/amico.png" alt='logo' width="502" height="448" className='inline-block items-center mt-20 mb-20' />
//             </div>
//           </div>
//           <div className="md:w-5/5">
//             <h2 className='md:text-4xl font-bold text-[#000000] mb-6 leading-relaxed ml-10'>Join our growing team</h2> 
//             <p className='text-2md text-[#000000] mb-6 ml-10'>We love what we do and we do it with passion. <br /> 
//             We value the experimentation of <br /> the message and smart incentives.</p>
//             <div>
//                         <button className='py-3 px-8 bg-secondary font-semibold text-white rounded-xl hover:bg-secondary transition-all duration-400 ml-5'>
//                           <p>See Current Openings</p></button>
//                     </div> 
//           </div> 
//         </div>
//       </div>
//     </div>
  

//   </div>


//     // </div>
//   )
// }

// export default page