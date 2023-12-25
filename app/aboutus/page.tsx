import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div>
      <Navbar />
<div className="max-w-screen-2xl mx-auto">
        <div className="text-white">
          <div className="md:px-4 sm:px-8 py-12 max-w-screen-2xl mx-auto mt-0">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="sm:w-full md:w-1/2">
                <div className="mr-10">
                  <Image src="/About.png" alt="logo" width="700" height="600" className="inline-block items-center mt-20 mb-20" />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="md:text-4xl font-bold text-[#000000] mb-6 leading-relaxed ml-10">About us</h2>
                <p className="text-2md text-[#000000] mb-6 ml-10">Lorem ipsum dolor sit amet consectetur. <br />
                  Vitae odio ut eleifend nec id. Dignissim <br /> purus convallis aliquam in aliquet. <br />
                  Sapien proin molestie lectus ultricies. Ut <br /> mattis facilisis .</p>
              </div>
            </div>
          </div>
        </div>
    <div className='mb-20'>
    <div className='border bg-[#333232] p-4 rounded-2xl text-center ml-80 mr-80'>
      <div className='md:flex flex-auto justify-between items-center'>
      <h1 className='md:text-4xl font-bold text-[#FFFFFF] leading-relaxed ml-10'>What is Margati?</h1>
                <p className='text-justify text-[#dad5d5] md:leading-2 ml-28'>Margati is an innovative digital solution that combines the power of public knowledge and 
                 community knowledge to facilitate goal-setting and provide users with valuable information and 
                 answers aligned with their objectives. 
                 </p>
                 </div>
                 </div>
                 </div>
                 <div className='mb-20'>
    <div className='border bg-[#9D5FA0] p-4 rounded-2xl text-center ml-80 mr-80'>
      <div className='md:flex flex-auto justify-between items-center'>
      <h1 className='md:text-4xl font-bold text-[#FFFFFF] leading-relaxed ml-10'>What is the concept?</h1>
                <p className='text-justify text-[#dad5d5] md:leading-2 ml-28'>The concept behind Margati 
                originated from the recognition that the initial phase of pursuing a goal
                 can be particularly challenging. This involves extensive research and 
                 preliminary groundwork to embark on a path towards success.  
                 </p>
                 </div>
                 </div>
                 </div>

                 <div className='mb-20'>
    <div className='border bg-[#4D74B5] p-4 rounded-2xl text-center ml-80 mr-80'>
      <div className='md:flex flex-auto justify-between items-center'>
      <h1 className='md:text-4xl font-bold text-[#FFFFFF] leading-relaxed ml-10'>What is Margati?</h1>
                <p className='text-justify text-[#dad5d5] md:leading-2 ml-28'>Margati is an innovative digital solution that combines the power of public knowledge and 
                 community knowledge to facilitate goal-setting and provide users with valuable information and 
                 answers aligned with their objectives. 
                 </p>
                 </div>
                 </div>
                 </div>

                 <div className=" md:px-20 py-12 max-w-screen-2xl mx-auto mt-14">
        <div>
            <h6 className='md:text-2xl text-3xl font bold  text-[#000000] md: flex-row justify-center text-center'>
            Our Team</h6>
                <div className='flex justify-center items-center'>
                <Image src="/member.png" alt='logo' width="700" height="600" className='inline-block items-center ml-10 mt-20 mb-20'>
          </Image>
          </div>
                </div>
            </div>

        </div>

   </div>
  )
}

export default page