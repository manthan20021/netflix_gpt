import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSingUp, setIsSingUp] = useState(false)
    const isSingUpHandler = () => {
        setIsSingUp(!isSingUp)
    }
  return (
    <div className='
    bg-[url(https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg)]
     w-full
      p-5
      '>
     <Header/>
     <div className='
     w-full 
     flex items-center 
     justify-center text-white
     '>
        <form className='
        bg-black 
        opacity-90 w-[450px] 
        h-[741px] py-12 px-16 
        rounded-md 
        '>
            <h1 className='
            font-bold text-4xl 
            mb-12
            '>{isSingUp ? "Sing Up" : "Sing In"}
            </h1>
            {isSingUp && <input className='
            bg-gray-800 w-full 
            p-3 mb-5 rounded-md 
            text-white' type='text' 
            placeholder='Full name
            '/>}
            <input className='
            bg-gray-800 w-full 
            p-3 mb-7 rounded-md 
            text-white' type='text' 
            placeholder='Email id
            '/>
            <input className='
            bg-gray-800 w-full 
            p-3 mb-5 rounded-md 
            text-white' type='password' 
            placeholder='password
            '/>
           
            <button className='
            bg-[#C11119] 
            mb-6 w-full p-2 
            rounded-md text-white
            '>{isSingUp ? "Sing Up" : "Sing In"}</button>
            <p>{isSingUp ? "Already registered? " : "New to NetflixGpt? "}
               <span onClick={()=>isSingUpHandler()} className='
               font-bold 
               cursor-pointer
               '>{isSingUp ? "Sing in now": "Sing up now."}</span></p>
        </form>
     </div>
    </div>
  )
}

export default Login
