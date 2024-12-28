import Title from './Title'
import Background from './Background'
import { useEffect, useState } from 'react'

const Main = () => {

    const [moveInfo, setMoveInfo] = useState([])
 

    const videoCalld = async () => {  
        await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=d4c3a4e4')
        .then(response => response.json())
        .then(data => {
          data.Type = 'trailer'
          setMoveInfo(data)
        })
        .catch(error => console.error(error))
      }
    
      useEffect(() => {
        videoCalld()
      },[])

  return (
    <div>
        <Title titleMove={moveInfo}/>
    <Background trailerMove={moveInfo}/>
    </div>
  )
}

export default Main
