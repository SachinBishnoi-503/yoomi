import React, { useState } from 'react'
import CommonButton from './common/CommonButton'
import newslatterlogo from '../assets/images/webp/newslatter-card.webp'
import newslatterman from '../assets/images/webp/newslatter-card-man.webp'
import newslatterimagecorner from '../assets/images/webp/platform-card-image.webp'


const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  }
  return (
    <div>
      <div className='container'>
        <div className='w-full bg-deep-blue rounded-[32px] border border-deep-blue min-h-[379px] relative'>
          <div className='flex flex-col items-start  p-[79px_618px__78px_84px] '>
            <img src={newslatterlogo} alt="newslatter-image-not-found" />
            <p className='font-normal text-3xl leading-custom-sm text-white'>Sign Up to Join <span className='font-semibold'>Our Newsletter</span></p>
            <form id='fromEmail' onSubmit={handleSubmit} method="get" className='max-w-[428px] w-full p-1.5 bg-white rounded flex justify-between items-center mt-7 lg:mt-14 shadow-3xl'>
              <input
                type="email"
                placeholder='Enter Your Email'
                className='font-medium font-inter placeholder:text-black text-base opacity-70 px-1.5 outline-none max-w-[292px] w-full'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <CommonButton button='Get Started' className='!rounded-[4px]' />
            </form>
            <img src={newslatterman} alt="newslatter-man-image-not-found" className='absolute right-[103px] top-[38px]' />
          </div>
          <img src={newslatterimagecorner} alt="newlatter-card-corner-image-not-found" className='right-0 bottom-0 absolute' />
        </div>


      </div>
    </div>
  )
}

export default Newsletter