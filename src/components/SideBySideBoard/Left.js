import React from 'react'

const Left = ({header, byLine, description}) => {
  return (
    <div>
      <h3>{header}</h3>
      <p>{byLine}</p>
      <div>
      <p>{description}</p>
      </div>
      
    </div>
  )
}

export default Left