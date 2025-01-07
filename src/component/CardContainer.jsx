import React from 'react'
import Card from './Card';


const CardContainer = ({mainMovis}) => {

    
   
  return (
    <div className='h-auto sm:-mt-32 -mt-[500px] grid grid-flow-row grid-cols-3 bg-black' >
        {
            mainMovis.map(movie => {
                return  <Card  key={movie.id} cardMove={movie}/>
            })
        }
    </div>
  )
}

export default CardContainer
