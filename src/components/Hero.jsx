import React, { useState } from 'react'
import CommonButton from './common/CommonButton'
import Header from '../components/Header'
import worktoplayer from '../assets/images/webp/work-top-layer.webp'
import leftellipse from '../assets/images/webp/hero-left.webp'
import rightellipse from '../assets/images/webp/hero-right.webp'
import treeleft from '../assets/images/webp/tree-left.webp'
import treeright from '../assets/images/webp/tree-right.webp'
  
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
    <div className='bg-hero-image bg-no-repeat bg-cover bg-center sm:min-h-[828px] max-sm:min-h-[660px] relative'>
      <Header />
      <div className='container relative z-[2]'>
        <div className='flex justify-center items-center flex-col lg:pt-[126px] max-lg:pt-[90px] max-md:pt-[70px] max-sm:pt-[50px] '>
          <h1 className='font-plus font-normal leading-custom-2xl md:text-custom-2xl max-md:text-4xl max-sm:text-media-lg text-center text-black max-w-[838px]'><span className='!font-extrabold'>Next Generation</span> Patient Engagement and RTM Solution✨</h1>
          <p className='font-inter font-normal md:text-2xl max-md:text-sm text-black opacity-70 mt-2'>Industry leading AI motion-tracking technology</p>
          <form id='fromEmail' onSubmit={handleSubmit} method="get" className='max-w-[428px] mx-auto w-full p-1.5 bg-white rounded flex justify-between items-center mt-7 lg:mt-14 shadow-3xl'>
            <input
              type="email"
              placeholder='Enter Your Email'
              className='font-medium font-inter placeholder:text-black text-base opacity-70 px-1.5 outline-none max-w-[292px] w-full'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <CommonButton button='Get Started' className='!rounded-[4px] text-nowrap' />
          </form>
          <div className={`w-[200px] z-50 place-items-center transition_slow h-12 bg-white shadow-3xl fixed bottom-10 flex justify-center items-center ${isSubmitted ? "right-10" : "-right-full"}`}>
            <span className='font-inter capitalize text-base'>Submit successfully</span>
          </div>
        </div>
      </div>
      <img src={treeleft} alt="tree-image-not-found" className='absolute left-[35px] bottom-[160px] max-sm:max-w-[80px] max-sm:w-full' />
      <img src={treeright} alt="tree-image-not-found" className='absolute right-9 z-[1] xl:right-[260px] bottom-[150px] max-sm:max-w-[70px] max-sm:w-full' />
      <img src={leftellipse} alt="ellpise-left-not-found" className='absolute left-0 top-[185px]' />
      <img src={rightellipse} alt="ellpise-left-not-found" className='absolute right-0 top-[240px]' />
      <img src={worktoplayer} alt="work-top-layer-not-found" className='absolute max-w-[574px] w-full bottom-16 left-1/2 -translate-x-1/2' />
    </div>
  )
}

export default Hero