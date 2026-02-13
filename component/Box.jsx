import React from 'react'
import Image from './Image'

const Box = ({src, heading, para,className}) => {
  return (
    <div className=' rounded-lg p-6 w-fit bg-white shadow-md'>
        <Image className={className} src={src} alt='icon' />
        <h4 className='font-bold text-xl mt-6 mb-3 '>{heading}</h4>
        <p className='font-normal text-[16px] w-63.5  '>{para} </p>
      </div>
  )
}

export default Box
