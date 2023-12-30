import Image from 'next/image'
const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
        <div className='bg-primary'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                <div className="md:w-5/5">
                    <p className='text-2xl text-[#FFFFFF] mb-6 mt-4 ml-10'>Margati aim to</p> 
                    <h2 className='md:text-5xl text-2xl font bold text-white mb-6 leading-relaxed ml-10'>Make sucess</h2>
                    <h1 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed ml-10'>Simple</h1>
                    <div className='mt-2'>
                        <button className='py-3 px-8 bg-white font-semibold text-black rounded-xl hover:bg-secondary transition-all duration-400 ml-5'><p>Download on the</p><h6>App Store</h6></button>
                        <button className='py-3 px-8 bg-white font-semibold text-black rounded-xl hover:bg-secondary transition-all duration-300 ml-5'><p>Get it on</p><h6>Google Play</h6></button>
                    </div>
                </div> 
                <div className='px-10'>
                <div className='mr-10'>
                <Image src="/banner.png" alt='logo' width="502" height="448" className='inline-block items-center mt-20 mb-20'>
          </Image>
                </div>
                {/* <Image src="/traingle.png" alt='polygon' width="450" height="200" className='inline-block items-center'>
          </Image> */}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner