import React from 'react'
import Card from './Card';


const CardContainer = ({mainMovis}) => {

    
   
  return (
    <div className='h-auto -mt-32 flex flex-wrap bg-black pl-20' >
        {
            mainMovis.map(movie => {
                return  <Card  key={movie.id} cardMove={movie}/>
            })
        }
    </div>
  )
}

export default CardContainer
