import React from 'react'
import Heading from '../component/Heading'
import Icon from '../src/assets/Group.png'
import Box from '../component/Box'
const Pillars = () => {
  return (
    <div>
      <Heading headding='Pillars of "Bangladesh 2.0"'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
        <Box src={Icon} heading="Innovation" para="Dolor sit amet consectetur elit. Facilis quas, ducimus labore sequi quos"/>
        <Box src={Icon} heading='Sustainability' para='Dolor sit amet consectetur elit. Facilis quas, ducimus labore sequi quos '/>
        <Box src={Icon}  heading='Infrastructure' para='Dolor sit amet consectetur elit. Facilis quas, ducimus labore sequi quos '/>
        <Box src={Icon} heading='Empowerment' para='Dolor sit amet consectetur elit. Facilis quas, ducimus labore sequi quos '/>
      </div>
    </div>
  )
}

export default Pillars
