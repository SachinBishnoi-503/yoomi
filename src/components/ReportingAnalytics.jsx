import React from 'react'
import CommonButton from './common/CommonButton'
import table from '../assets/images/webp/reporting-table.webp'
import weeektable from '../assets/images/webp/week-table-img.webp'
import satutsweekend from '../assets/images/webp/status-img.webp'

const ReportingAnalytics = () => {
  return (
    <div className='mt-[97px] pb-[96px]'>
      <div className='container'>
        <div className='w-full p-[48px_37px_47px_34px] shadow-4xl flex justify-between rounded-[32px] items-center'>
          <div className='w-[404px] h-[218px]'>
            <h2 className='font-inter font-medium text-base leading-5 text-deep-blue'>REPORT</h2>
            <h2 className='font-normal text-custom-lg leading-9 font-plus text-black mt-2'>Reporting + <span className='font-semibold'>Analytics</span></h2>
            <p className='font-inter font-normal text-base leading-6 text-black opacity-70 max-w-[385px] mt-5'>Track patient progress over time with compliance, pain, RPE, ROM and other key metrics</p>
            <CommonButton className='!p-[16px_20px] rounded mt-[37px]' button='View the Matrics' />
          </div>
          <div className='max-w-[619px] h-[454px] relative'>
              <img src={table } alt="reporting-images-not-found" />
              <img src={weeektable } alt="reporting-images-not-found" className='absolute bottom-[-3px] right-6' />
              <img src={satutsweekend} alt="reporting-images-not-found" className='absolute top-[-33px] left-[-24px] min-h-[141px] max-w-[282px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportingAnalytics