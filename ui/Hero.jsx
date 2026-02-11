import React from 'react'
import Button from '../component/Button'
import Image from '../component/Image'
import HImg from '../src/assets/hero.png'

const Hero = () => {
    return (
        <div className='grid grid-cols-2 justify-between bg-[#C6E4D6] rounded-2xl items-center px-15 '>
            <div>
            <h6 className='text-2xl font-medium text-[#808080] '>Bangladesh 2.0</h6>
            <h1 className='font-bold text-[56px] max-w-155.5 mt-4'>Idea , innovation , <br />
                vision and challenges in New Bangladesh.</h1>
            <Button className='py-4.25 px-8.5 bg-[#006A50] text-white rounded-lg mt-6 font-semibold text-lg' bName='Explore New Bangladesh' />
        </div>
        <Image src={HImg} alt='hero img' className='pt-20 w-[400.03px] h-100 mb-20'/>
        </div>
    )
}

export default Hero
