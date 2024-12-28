import React from 'react'

const Background = ({trailerMove}) => {
  console.log(trailerMove);
  
  return (
    <div>
         <iframe width="560" height="315" 
         src="https://www.youtube.com/embed/tt3896198?si=bny--XuaKSjxPZJg" 
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
         </iframe>

    </div>
  )
}

export default Background
