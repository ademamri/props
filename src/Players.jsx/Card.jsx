import React from 'react'

const Card = ({el}) => {
  return (
    <div className='card'>
      <img src={el.image} alt="" />
      <h1>{el.name}</h1>
      <h1>{el.nationality}</h1>
     
    </div>
  )
}

export default Card
