import React from 'react'
import Container from '../component/Container'
import Nav from '../ui/Nav'
import Hero from '../ui/Hero'
import Pillars from '../ui/Pillars'

const App = () => {
  return (
    <div className='bg-[#F2F2F2]'>
      <Container>
        <Nav/>
        <Hero/>
        <Pillars/>
      </Container>
    </div>
  )
}

export default App
