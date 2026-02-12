import React from 'react'

const Heading = ({headding,className}) => {
  return (
    <div>
      <h2 className={`font-bold text-[40px] mt-20 ${className}`}>{headding}</h2>
    </div>
  )
}

export default Heading
