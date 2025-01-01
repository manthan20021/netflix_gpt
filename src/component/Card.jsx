import React from 'react'

const Card = ({cardMove}) => {
  return (
    <div className='p-2'>
      <img className = "h-60 rounded-sm" src={cardMove?.image} alt='movie poster'/>
    </div>
  )
}

export default Card
