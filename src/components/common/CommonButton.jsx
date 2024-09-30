import React from 'react'

const CommonButton = ({button,className}) => {
  return (
      
    <button className={`font-inter text-base p-[13px_16px] bg-deep-blue text-white border-[2px] border-deep-blue hover:text-deep-blue hover:bg-white duration-300 ease-linear ${className}`} >{button}</button>
    
  )
}

export default CommonButton