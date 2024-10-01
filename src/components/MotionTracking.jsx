import React from 'react'
import workout1 from '../assets/images/webp/tracking-man-workout.webp'
import workout2 from '../assets/images/webp/tracking-three-image.webp'
import workout3 from '../assets/images/webp/tracking-wrokout1.webp'
import correct from '../assets/images/webp/nike-image.webp'
import CommonButton from './common/CommonButton'

const MotionTracking = () => {
  return (
    <div>
      <div className='container'>
        <div className='w-full p-[57px_28px_58px_33px] shadow-4xl rounded-[32px] flex justify-between items-center'>
          <div className='w-[552px] h-[329px] relative '>
            <img src={workout1} alt="images-not-found" className='' />
            <img src={workout3} alt="images-not-found" className='absolute top-[-45px] left-[-30px]' />
            <img src={workout2} alt="images-not-found" className='absolute right-0 top-[-18px]' />
          </div>
          <div className='w-[458px] h-[435px]'>
            <div>
              <h2 className='text-deep-blue font-medium text-base leading-5'>TRACKING</h2>
              <h2 className='font-normal font-plus text-custom-lg text-nowrap leading-9 mt-2'>Cutting Edge Motion <span className='font-semibold'>Tracking/</span></h2>
              <p className='font-semibold font-plus text-custom-lg leading-9'>Feedback</p>
              <div className='flex items-center gap-[15px] mt-5'>
                <img src={correct} alt="correct-not-found" />
                <p className='font-inter font-normal text-base leading-6 max-w-[361px] text-black opacity-70'>Provides a holistic, real-time analysis of patient exercise form, capturing 300+ data points and critical metrics.</p>
              </div>
              <div className='flex items-center gap-[15px] mt-[9px]'>
                <img src={correct} alt="correct-not-found" />
                <p className='font-inter font-normal text-base leading-6 max-w-[361px] text-black opacity-70'>Delivers immediate feedback and guidance to correct and improve exercise form</p>
              </div>
              <div className='flex items-center gap-[15px] mt-[9px]'>
                <img src={correct} alt="correct-not-found" />
                <p className='font-inter font-normal text-base leading-6 max-w-[371px] text-black opacity-70'>Supported by the most accurate motion-tracking model designed for rehabilitation, Yoomi Vision</p>
              </div>
              <div className='flex items-center gap-[15px] mt-[9px]'>
                <img src={correct} alt="correct-not-found" />
                <p className='font-inter font-normal text-base leading-6 text-black opacity-70'>Requires no custom hardware, sensors, or equipment</p>
              </div>
              <CommonButton className='!p-[16px_32px] rounded mt-[40px]' button='Test it Yourself' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MotionTracking