import React from 'react'
import Left from './Left'
import Right from './Right'


const SideBySideBoard = ({ left, right }) => {
  
  return (
    <div>
      <div>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  )
}

export default SideBySideBoard