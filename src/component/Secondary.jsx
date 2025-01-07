import React from 'react'
import CardContainer from './CardContainer'
import { useSelector } from 'react-redux'

const Secondary = () => {
   const movies = useSelector((store) => store.moves.playMove)
         if(!movies) return;
         console.log(movies);

  return (
    <div className='w-[100%]'>

     <CardContainer mainMovis={movies}/>
    </div>
  )
}

export default Secondary
