import React from 'react'
import Button from './Button'
import Image from './Image';
import Icon from '../src/assets/Group.png'
const Fbox = ({className,heading,para,pclass,bclass}) => {
  return (
    <div className={`${className} p-8 w-fit rounded-2xl mt-8`}>
        <Image src={Icon} alt='icon' className='w-16 h-16'/> 
        <h4 className='font-bold text-xl mt-6'>{heading}</h4>
        <p className={`${pclass} font-normal text-[16px] mt-3`}>{para}</p>
        
        <Button className={`${bclass} py-3 px-5 rounded-lg`} bName='Learn More'/>

      </div>
  )
}

export default Fbox
