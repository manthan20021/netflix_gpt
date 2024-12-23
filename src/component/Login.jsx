import { useRef, useState } from 'react'
import Header from './Header'
import { validation } from '../utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'
//timestapm video 1.58m
const Login = () => {
    const [isSingUp, setIsSingUp] = useState(true)
    const [emailPassValideteion, setEmailPassValideteion] = useState(null)



    const email = useRef(null)
    const password = useRef(null)
   

    const validateHendeler = () => {
      const validationMsg = validation(email.current.value,password.current.value)
      setEmailPassValideteion(validationMsg)
      if(validationMsg) return;
      
      if(isSingUp){
        try{
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user);
        })
        } catch (error){
        
          setEmailPassValideteion(error.messege)
        
        }
      }else{
       try{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user);
        })
       } catch (error){
        setEmailPassValideteion(error.messege)
       }
      }
    }

    const isSingUpHandler = () => {
        setIsSingUp(!isSingUp);
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
        <form
         onClick={(e) => e.preventDefault()}
        className='
        bg-black
        opacity-90
         sm:w-[450px] 
         w-full
        h-[741px] py-12 px-16 
        rounded-md
        '>
            <h1 className='
            font-bold text-4xl 
            mb-12
            '>{isSingUp ? "Sing Up" : "Sing In"}
            </h1>
            
            {isSingUp && <input
            className='
            bg-gray-800 w-full 
            p-3 mb-5 rounded-md 
            text-white' type='text' 
            placeholder='Full name
            '/>}
            <input
            ref={email}
            className='
            bg-gray-800 w-full 
            p-3 mb-7 rounded-md 
            text-white' type='text' 
            placeholder='Email id
            '/>
            <input
            ref={password}
            className='
            bg-gray-800 w-full 
            p-3 mb-5 rounded-md 
            text-white' type='password' 
            placeholder='password
            '/>
           <p className='text-red-700 mb-5 font-bold'>{emailPassValideteion}</p>
           
            <button 
            onClick={() => validateHendeler() }
            className='
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
