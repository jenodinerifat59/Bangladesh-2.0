import React from 'react'
import Image from '../component/Image'
import Logo from '../src/assets/logo.png'
import Button from '../component/Button'
const Nav = () => {
  return (
    <div className='flex justify-between items-center pt-6'>
      <Image src={Logo} alt='logo' className='w-55.5 h-9.5'/>
      <Button className='text-lg font-semibold text-[#006A50] border border-[#006A50] rounded-lg py-3.75 px-7.5 mb-11' bName='Sign In' />
    </div>
  )
}

export default Nav
