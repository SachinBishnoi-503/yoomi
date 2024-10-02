import React from 'react'
import footerlogo from '../assets/images/webp/newslatter-card.webp'
import footermsg from '../assets/images/svg/footer-massege.svg'
import footercalling from '../assets/images/svg/footer-calling.svg'

const Footer = () => {
  return (
    <div className='bg-black min-h-[548px] mt-[-106px] relative'>
      <div className='container'>
        <div className=' flex pt-[213px] justify-between'>
          <div>
            <img src={footerlogo} alt="footer-logo-not-found" />
            <p className='font-inter font-light text-sm leading-5 max-w-[277px] text-white pt-[29px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” </p>
            <div className='flex items-center gap-[18px] pt-[29px]'>
              <img src={footermsg} alt="msg-not-found" />
              <a className='text-white font-inter font-light text-base leading-5' href="mailto:contact@yoomi.com">contact@yoomi.com</a>
            </div>
            <div className='flex items-center gap-[18px] pt-[16px]'>
              <img src={footercalling} alt="msg-not-found" />
              <a className='text-white font-inter font-light text-base leading-5' href="callto:+123 456 789">+123 456 789</a>
            </div>
          </div>
          <div className='flex gap-[80px]'>
            <div className='flex items-start flex-col'>
              <h2 className='font-semibold font-inter leading-4 text-sm text-white'>About</h2>
              <a className='font-inter font-normal text-sm leading-4 text-white mt-[18px]' href="">Meet the Team</a>
              <a className='font-inter font-normal text-sm leading-4 text-white mt-[18px]' href="">Our Mission</a>
              <a className='font-inter font-normal text-sm leading-4 text-white mt-[18px]' href="">Our Vision</a>
            </div>
            <div className='flex items-start flex-col'>
              <h2 className='font-semibold font-inter leading-4 text-sm text-white'>Contact Us</h2>
              <a className='font-inter font-normal text-sm leading-4 text-white mt-[18px]' href="">Twitter</a>
              <a className='font-inter font-normal text-sm leading-4 text-white mt-[18px]' href="">Instagram</a>
              <a className='font-inter font-normal text-sm leading-4 text-white mt-[18px]' href="">Linkedin</a>
            </div>
            <div className='flex items-start flex-col'>
              <h2 className='font-semibold font-inter leading-4 text-sm text-white'>News</h2>
              <a className='font-inter font-normal text-sm leading-4 text-white mt-[18px]' href="">Recent</a>
            </div>
          </div>
        </div>
        <div className='mt-[64px] gap-[23px] flex justify-end'>
          <a className='font-inter font-normal text-sm leading-4 text-light-gray' href="">Terms of Service</a>
          <a className='font-inter font-normal text-sm leading-4 text-light-gray' href="">Privacy Policy</a>
          <a className='font-inter font-normal text-sm leading-4 text-light-gray' href="">Cookies</a>
        </div>
      </div>
      <div className='border bg-light-gray opacity-45 w-full mt-[41px] absolute left-0 bottom-[61px]'></div>
    </div>
  )
}

export default Footer