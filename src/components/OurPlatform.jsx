import React from 'react'
import cardimage from '../assets/images/webp/platform-card-image.webp'
const OurPlatform = () => {
  return (
    <div className='py-20 bg-off-gray'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-inter font-medium leading-5 text-base text-deep-blue'>PLATFORM</h2>
          <h2 className='font-normal font-plus leading-custom-xl  text-custom-xl text-black mt-2'>Through <span className='font-semibold'>Our Platform</span></h2>
          <h2 className='font-inter font-normal text-base leading-5 text-black opacity-70 mt-4'>We’ve helped out partners and patients achieve</h2>
        </div>
        <div className='flex flex-row flex-wrap -mx-3 mt-[59px]'>
          <div className='w-4/12 px-3'>
            <div className='!min-h-[207px] !max-w-[268px] bg-light-green flex flex-col justify-center items-center relative'>
              <div>
                <h2 className='font-inter font-semibold text-custom-3xl leading-custom-3xl text-white'>50%</h2>
                <p className='font-inter font-normal text-xl leading-8 text-white max-w-[148px] opacity-80 text-center'>Reduction in Pain</p>
                <img src={cardimage} alt="card-corner-image-not-found" className='absolute right-0 bottom-0' />
              </div>
            </div>

          </div><div className='w-4/12 px-3'>
            <div className='!min-h-[207px] !max-w-[268px] bg-light-blue flex flex-col justify-center items-center relative'>
              <div>
                <h2 className='font-inter font-semibold text-custom-3xl leading-custom-3xl text-white flex justify-center '>90%</h2>
                <p className='font-inter font-normal text-xl leading-8 text-white max-w-[184px] text-center'>Increase In-Patient Satisfaction</p>
                <img src={cardimage} alt="card-corner-image-not-found"  className='absolute right-0 bottom-0'/>
              </div>
            </div>

          </div><div className='w-4/12 px-3'>
            <div className='!min-h-[207px] !max-w-[268px] bg-deep-blue flex flex-col justify-center items-center relative'>
              <div>
                <h2 className='font-inter font-semibold text-custom-3xl leading-custom-3xl text-white flex justify-center'>60%</h2>
                <p className='font-inter font-normal text-xl leading-8 text-white'>Faster Recovery</p>
                <img src={cardimage} alt="card-corner-image-not-found" className='absolute right-0 bottom-0' />
              </div>
            </div>

          </div>  
        </div>
      </div>
    </div>
  )
}

export default OurPlatform