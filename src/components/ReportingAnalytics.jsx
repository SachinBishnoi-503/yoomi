import React from 'react'
import CommonButton from './common/CommonButton'
import table from '../assets/images/webp/reporting-table.webp'
import weeektable from '../assets/images/webp/week-table-img.webp'
import satutsweekend from '../assets/images/webp/status-img.webp'
import reportingellipse from '../assets/images/webp/reporting-ellipse.webp'
const ReportingAnalytics = () => {
  return (
    <div className='mt-[97px] pb-[96px]'>
      <div className='container'>
        <div className='w-full lg:p-[48px_37px_47px_34px] lg:shadow-4xl lg:flex lg:justify-between rounded-[32px] max-lg:flex-col lg:items-center relative'>
          <div className='lg:w-[404px] w-full lg:h-[218px] max-lg:h-auto'>
            <h2 className='font-inter font-medium text-base leading-5 text-deep-blue'>REPORT</h2>
            <h2 className='font-normal text-custom-lg leading-9 font-plus text-black mt-2'>Reporting + <span className='font-semibold'>Analytics</span></h2>
            <p className='font-inter font-normal text-base leading-6 text-black opacity-70 max-w-[385px] mt-5'>Track patient progress over time with compliance, pain, RPE, ROM and other key metrics</p>
            <CommonButton className='!p-[16px_20px] rounded mt-[37px]' button='View the Matrics' />
          </div>
          <div className='max-w-[619px] h-[454px] relative max-lg:mt-[46px] max-lg:mx-auto'>
              <img src={table } alt="reporting-images-not-found"  className='w-full'/>
              <img src={weeektable } alt="reporting-images-not-found" className='absolute bottom-[-3px] max-sm:bottom-[120px] max-sm:right-1 max-sm:max-w-[200px] right-6' />
              <img src={satutsweekend} alt="reporting-images-not-found" className='absolute top-[-33px] left-[-24px] max-md:min-h-[80px] md:min-h-[141px] max-md:max-w-[200px] md:max-w-[282px]' />
          </div>
          <img src={reportingellipse} alt="reporting-ellipse-not-found" className='left-0 bottom-0 absolute' />
        </div>
      </div>
    </div>
  )
}

export default ReportingAnalytics