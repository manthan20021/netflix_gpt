import React from 'react'
import Card from './Card';


const CardContainer = ({mainMovis}) => {

    
   
  return (
    <div className='h-auto sm:-mt-32 absolute sm:top-[750px] top-48 grid grid-flow-row grid-cols-3 bg-black' >
        {
            mainMovis.map(movie => {
                return  <Card  key={movie.id} cardMove={movie}/>
            })
        }
    </div>
  )
}

export default CardContainer
