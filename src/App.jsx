import React from 'react'
import Container from '../component/Container'
import Nav from '../ui/Nav'
import Hero from '../ui/Hero'
import Pillars from '../ui/Pillars'
import Future from '../ui/Future'
import Survey from '../ui/Survey'

const App = () => {
  return (
    <div className='bg-[#F2F2F2]'>
      <Container>
        <Nav/>
        <Hero/>
        <Pillars/>
        <Future/>
        <Survey/>
      </Container>
    </div>
  )
}

export default App
