import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    
    <div>
      <hr className='border-solid border-8 border-[#DCE375]' />
      <div>
        <div className='flex justify-center items-center'>
        <Image src="/logo1.png" alt='logo' width="200" height="100" className='inline-block items-center ml-10 mt-20 mb-20'>
          </Image>
        </div>
        <h1 className='md:text-4xl text-3xl font bold  text-[#000000] md: flex-row justify-center text-center'>Subscribe to our newsletter</h1>
        <p className='text-2md text-[#000000]  md: flex-row justify-center text-center'>Be the first one to know about our updates. Unsubscribe whenever you like.</p>
        <div className='bg-secondary'>
          <div>Fotter</div>
        </div>
      </div>
      </div>
  )
}

export default Footer