import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import swiperslidersec from '../assets/images/webp/swiperseacond-image.webp'

export const SwiperSlider = () => {
    const [setThumbsSwiper] = useState(null);

    return (
        <div className='mt-[37px] max-w-[716px] mx-auto pb-[92px]'>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={22}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={swiperslidersec} alt='seacond-swiper-slider-image' className='max-w-[152px] min-h-[114px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperslidersec} alt='seacond-swiper-slider-image' className='max-w-[152px] min-h-[114px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperslidersec} alt='seacond-swiper-slider-image' className='max-w-[152px] min-h-[114px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperslidersec} alt='seacond-swiper-slider-image' className='max-w-[152px] min-h-[114px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperslidersec} alt='seacond-swiper-slider-image' className='max-w-[152px] min-h-[114px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperslidersec} alt='seacond-swiper-slider-image' className='max-w-[152px] min-h-[114px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiperslidersec} alt='seacond-swiper-slider-image' className='max-w-[152px] min-h-[114px]' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
