import React from 'react';
import nikeimage from '../assets/images/webp/nike-image.webp';
import CommonButton from './common/CommonButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import sliderimage1 from '../assets/images/webp/swiper-slider1-image.webp';
import sliderimage2 from '../assets/images/webp/swiper-slider1-image2.webp';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import swipernext from '../assets/images/svg/slider-next.svg';
import swiperback from '../assets/images/svg/slider-back.svg';

const AmazingFeatures = () => {
  return (
    <div className='pt-[125px] pb-[97px]'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center pb-[55px]'>
          <h6 className='font-inter font-medium leading-4 text-deep-blue text-base'>Features</h6>
          <h2 className='font-normal text-black text-custom-xl leading-custom-xl font-plus mt-2'>
            Explore Our <span className='font-semibold'>Amazing Features</span>
          </h2>
          <p className='font-normal text-base font-inter text-black text-center max-w-[724px] mt-[10px] leading-6'>
            Yoomi is more than just a regular remote monitoring solution. Our product supports patients and providers through every step of the rehabilitation process.
          </p>
        </div>
        <div className='w-full pb-[60px] p-[0px_0px_0px_30px] shadow-4xl flex gap-10 justify-between mt-[61px] rounded-[32px]'>
          <div className='max-w-[468px]'>
            <h3 className='font-inter font-medium text-deep-blue text-base leading-5'>Library</h3>
            <h2 className='font-normal font-plus leading-custom-lg text-custom-lg text-black mt-2'>
              Extensive Exercise <span className='!font-semibold'>Library</span>
            </h2>
            <div className='mt-[21px]'>
              {Array.from({ length: 3 }).map((_, index) => (
                <div className='flex items-center gap-[15px] mt-[9px]' key={index}>
                  <img src={nikeimage} alt={`Exercise option ${index + 1}`} />
                  <p className='max-w-[394px]'>
                    {index === 0
                      ? "Utilize Yoomi’s HEP templates to quickly create and assign programs to your patients"
                      : index === 1
                        ? "Choose from our library of exercises for all patient cases"
                        : "Use Yoomi’s industry-leading exercise generation tool to create your own exercises that track adherence and form in seconds"}
                  </p>
                </div>
              ))}
            </div>
            <CommonButton className='!p-[16px_18px] rounded mt-[37px]' button='View the Library' />
          </div>
          <div className='max-w-[569px] w-full relative'>
            <Swiper
              spaceBetween={35}
              slidesPerView={1.2}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next1",
                prevEl: ".swiper-button-prev1",
              }}
              modules={[Navigation]}
            >
              {[sliderimage1, sliderimage2, sliderimage1, sliderimage2].map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Slider image ${index + 1}`} className='max-w-[460px] w-full min-h-[331px] h-full' />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='flex gap-[10px] mt-[15px]'>
              <span className='preview-back swiper-button-prev1 cursor-pointer w-[34px] h-[34px] bg-white border border-black rounded-full grid place-items-center'>
                <img src={swiperback} alt="Previous Slide" />
              </span>
              <span className='preview-next swiper-button-next1 cursor-pointer w-[34px] h-[34px] bg-deep-blue rounded-full border border-deep-blue grid place-items-center'>
                <img src={swipernext} alt="Next Slide" />
              </span>
            </div>
            <div className='bg-light-blue w-[520px] h-[262px] absolute top-[-47px] right-0'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingFeatures;
