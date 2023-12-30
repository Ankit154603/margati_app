import React from 'react'
import Image from 'next/image'
const Banner2 = () => {
  return (
    <div className=" md:px-20 py-12 max-w-screen-2xl mx-auto mt-0">
        <div>
            <h6 className='md:text-4xl text-3xl font bold  text-[#000000] md: flex-row justify-center text-center mb-20'>How does
            <span className='text-secondary'> margati</span> work</h6>
            <div className=' border-solid border-8 border-[#DCE375] p-4 ml-2 mr-4 rounded-3xl'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                <div className="md:w-5/5">
                <h2 className='md:text-4xl font-bold text-[#000000] mb-6 leading-relaxed ml-10'>Create Goal</h2> 
                    <p className='text-2md text-[#000000] mb-6 ml-10'>Use the Margati Platform to create a <br /> goal for your self that 
                    you wish to  <br />achieve within an expected deadline.</p> 
                </div> 
                <div className='px-10'>
                <div className='mr-10'>
                <Image src="/arrow.png" alt='logo' width="502" height="448" className='inline-block items-center mt-20 mb-20'>
          </Image>
                    </div>
                    </div>
            </div>
            </div>

                {/* Banner 3 */}

            <div className=' border-solid border-8 border-[#DCE375] p-4 rounded-3xl ml-2 mr-4 mt-28'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                <div className="md:w-5/5">
                <h2 className='md:text-4xl font-bold text-[#000000] mb-6 leading-relaxed ml-10'>
                    Community <br /> Responses</h2> 
                    <p className='text-2md text-[#000000] mb-6 ml-10'>Seek help and responses from your <br /> 
                    friends on the platform who will assist <br />
                     you in goal completion.</p> 
                </div> 
                <div className='px-10'>
                <div className='mr-10'>
                <Image src="/banner3.png" alt='logo' width="502" height="448" className='inline-block items-center mt-20 mb-20'>
          </Image>
                    </div>
                    </div>
                    
            </div>
            </div>


               {/* Banner 4 */}

               <div className=' border-solid border-8 border-[#DCE375] p-4 ml-2 mr-4 rounded-3xl mt-28'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                <div className="md:w-5/5">
                <h2 className='md:text-4xl font-bold text-[#000000] mb-6 leading-relaxed ml-10'>
                Public <br /> Responses</h2> 
                    <p className='text-2md text-[#000000] mb-6 ml-10'>Use AI assistance to find relevant 
                    <br /> contacts and guidance in order to
                     <br /> complete your goal.</p> 
                </div> 
                <div className='px-10'>
                <div className='mr-10'>
                <Image src="/banner4.png" alt='logo' width="502" height="448" className='inline-block items-center mt-20 mb-20'>
          </Image>
                    </div>
                    </div>
                    
            </div>
            </div>

            {/* banner5 */}


            <div className=" md:px-20 py-12 max-w-screen-2xl mx-auto mt-28">
        <div>
            <h6 className='md:text-4xl text-3xl font bold  text-[#000000] md: flex-row justify-center text-center mb-20'>
            Reviews from people who have used <span className='text-secondary'> margati</span> work</h6>
            <div className=' border-solid border-8 border-secondary p-4 rounded-2xl text-center ml-2 mr-3'>
                <p  className='text-2md text-[#000000] mb-6 ml-10'>Lorem ipsum dolor sit amet consectetur. Vitae odio ut eleifend nec id. Dignissim purus <br /> 
                convallis aliquam in aliquet. Sapien proin molestie lectus ultricies. Ut mattis facilisis <br />
                tincidunt et ac volutpat. Malesuada sit ac eu praesent ultricies convallis eget facilisis. <br />
                 Mattis nunc ipsum eget vitae quam. Diam magna ullamcorper ridiculus et. 
                 </p>
                 <p className='text-2md font-semibold'>Lorem ipsum dolor </p>
                </div>
                <div className='flex justify-center items-center mr-10'>
                <Image src="/persons.png" alt='logo' width="502" height="448" className='inline-block items-center ml-10 mt-20 mb-20'>
          </Image>
          </div>
                </div>
            </div>

        </div>
    </div>
    
  )
}

export default Banner2