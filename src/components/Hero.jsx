import React, { useState } from 'react'
import CommonButton from './common/CommonButton'

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };
  return (
    <div className='bg-hero-image bg-no-repeat bg-cover bg-center min-h-[828px] pt-[129px]'>
      <div className='container'>
        <div className='flex justify-center items-center flex-col '>
          <h1 className='font-plus font-normal leading-custom-2xl text-custom-2xl text-center text-black max-w-[838px]'><span className='!font-extrabold'>Next Generation</span> Patient Engagement and RTM Solution✨</h1>
          <p className='font-inter font-normal text-2xl text-black opacity-70 mt-2'>Industry leading AI motion-tracking technology</p>
          <form id='fromEmail' onSubmit={handleSubmit} method="get" className='max-w-[428px] mx-auto w-full p-1.5 bg-white rounded flex justify-between items-center mt-7 lg:mt-14 shadow-3xl'>
            <input
              type="email"
              placeholder='Enter Your Email'
              className='font-medium font-inter placeholder:text-black text-base opacity-70 px-1.5 outline-none max-w-[292px] w-full'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <CommonButton button='Get Started' />
          </form>
          <div className={`w-[200px] z-50 place-items-center transition_slow h-12 bg-white shadow-3xl fixed bottom-10 flex justify-center items-center ${isSubmitted ? "right-10" : "-right-full"}`}>
            <span className='font-inter capitalize text-base'>Submit successfully</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero