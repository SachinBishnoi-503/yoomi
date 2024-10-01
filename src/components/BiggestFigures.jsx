import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { SwiperSlider } from './SwiperSlider';
import swiperimage from '../assets/images/webp/biggest-image.webp'

const BiggestFigures = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className=''>
      <div className='container'>
        <div className='flex justify-center items-center flex-col'>
          <h2 className='font-inter font-medium text-base leading-5 text-deep-blue'>Know More</h2>
          <h2 className='font-normal text-black font-plus text-custom-xl leading-[48px] max-w-[615px] text-center'>And Used by the Biggest <span className='font-semibold'>Figures in Sports and Rehab</span></h2>
        </div>
        <div className='max-w-[946px] mx-auto mt-[55px]'>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={swiperimage} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperimage} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperimage} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperimage} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperimage} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperimage} />
            </SwiperSlide>
          </Swiper>
          <SwiperSlider/>
        </div>
      </div>
    </div>
  )
}

export default BiggestFigures