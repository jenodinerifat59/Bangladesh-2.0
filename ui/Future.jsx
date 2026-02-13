import React from 'react'
import Heading from '../component/Heading'
import Fbox from '../component/Fbox'



const Future = () => {
  return (
    <div>
      <Heading headding='The Vision of Future' />
      <p className='font-normal trxt-[16px] mt-6 '> Bangladesh 2.0 aims to redefine the nation’s trajectory by embracing cutting-edge technology, promoting inclusive growth, and ensuring sustainability. With initiatives in renewable energy, digital transformation, and robust infrastructure, the country is set to become a global model of development.</p>

      <div className='grid grid-cols-3'>

        <Fbox className='bg-[#D5E1F5]' heading='Digital Transformation' para='Creating a nationwide digital ecosystem to enhance connectivity and access to services for all citizens.' pclass='w-[346.67px]' bclass='mt-6 bg-[#5490F5]'/>
        <Fbox className='bg-[#C6E4D6]' heading='Green Energy' para='Investments in solar and wind energy to ensure a sustainable and eco-friendly future.' pclass='w-[346.67px]' bclass='mt-12 bg-[#09A15C]'/>
        <Fbox className='bg-[#F7EBCF]' heading='Modern Infrastructure' para='Building state-of-the-art infrastructure to support economic growth and global competitiveness.' pclass='w-[362.67px]' bclass='mt-12 bg-[#FFC239]'/>
      </div>
      
    </div>
  )
}

export default Future
