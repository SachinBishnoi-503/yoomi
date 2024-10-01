import React from 'react'
import healthcareimage1 from '../assets/images/webp/healtcare-image1.webp'
import healthcareimage2 from '../assets/images/webp/healthcare-image2.webp'
import healthcareimage3 from '../assets/images/webp/healthcare-image3.webp'
import healthcareimage4 from '../assets/images/webp/healthcare-image4.webp'
import healthcareimage5 from '../assets/images/webp/healthcare-image5.webp'

const Healthcare = () => {
  return (
    <div className='mt-[87px] pb-[95px]'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-inter font-medium text-base leading-5 text-deep-blue'>Partners</h2>
          <h2 className='font-normal text-black text-custom-xl leading-[48px] max-w-[684px] text-center pt-2'>Recognized by Leading <span className='!font-semibold'> Healthcare Institutions</span>
          </h2>
        </div>
        <div className='flex justify-between items-center mt-[37px]'>
          <div className='max-w-[207px] w-full grid place-items-center min-h-[137px] shadow-5xl'>
            <img className='' src={healthcareimage1} alt="image-not-found" />
          </div>
          <div className='max-w-[207px] w-full grid place-items-center min-h-[137px] shadow-5xl'>
            <img className='' src={healthcareimage2} alt="image-not-found" />
          </div>
          <div className='max-w-[207px] w-full grid place-items-center min-h-[137px] shadow-5xl'>
            <img className='' src={healthcareimage3} alt="image-not-found" />
          </div>
          <div className='max-w-[207px] w-full grid place-items-center min-h-[137px] shadow-5xl'>
            <img className='' src={healthcareimage4} alt="image-not-found" />
          </div>
          <div className='max-w-[207px] w-full grid place-items-center min-h-[137px] shadow-5xl'>
            <img className='' src={healthcareimage5} alt="image-not-found" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Healthcare