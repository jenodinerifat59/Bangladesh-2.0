import React from 'react'
import Heading from '../component/Heading'
import Icon from '../src/assets/Group.png'
import Box from '../component/Box'
const Pillars = () => {
  return (
    <div>
      <Heading headding='Pillars of "Bangladesh 2.0"'/>
      <div className='grid grid-cols-4 gap-6'>
        <Box src={Icon} heading='Innovation' para='Dolor sit amet consectetur elit. Facilis quas, ducimus labore sequi quos '/>
        <Box src={Icon} heading='Innovation' para='Dolor sit amet consectetur elit. Facilis quas, ducimus labore sequi quos '/>
        <Box src={Icon}  heading='Innovation' para='Dolor sit amet consectetur elit. Facilis quas, ducimus labore sequi quos '/>
        <Box src={Icon} heading='Innovation' para='Dolor sit amet consectetur elit. Facilis quas, ducimus labore sequi quos '/>
      </div>
    </div>
  )
}

export default Pillars
