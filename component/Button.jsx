import React from 'react'

const Button = ({className, bName}) => {
  return (
    <div>
      <button  className={className}>{bName}</button>
    </div>
  )
}

export default Button
