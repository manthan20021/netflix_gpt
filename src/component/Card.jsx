import React from 'react'

const Card = ({cardMove}) => {
  return (
    <div className='p-2'>
      <img className = " rounded-sm" src={cardMove?.thumbnail_url} alt='movie poster'/>
    </div>
  )
}

export default Card
