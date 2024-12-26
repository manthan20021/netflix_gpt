import { useNavigate } from 'react-router-dom'
import { LOGO_IMG_URL } from '../utils/Constent'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addUser, removeUser } from '../store/getUsersSlice'


const Header = () => {  

  const dispatch = useDispatch()
  const naviget = useNavigate()
  const user = useSelector((store) => store.user)

     useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if(user){
            const {uid, email, displayName} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}))
            naviget("/browes")
          }else{
            dispatch(removeUser())
            naviget("/")
          }
        })      

        //unsubscribe when component unmount
        return () => unsubscribe()
      },[])
     

  const handelLogOut = (e) => {
    e.preventDefault()
    signOut(auth)
    .then(() => {
    }).catch((error) => {
      naviget("/error")
      alert(error)
      
    })
  }
  return (
    <div className='w-full bg-gradient-to-b from-black flex justify-between items-center px-5'>
      <img className='h-16 sm:block none' src={LOGO_IMG_URL} alt="netflex logo" />
      {
        user && <button 
        onClick={handelLogOut}
        className='
        bg-red-500 font-bold text-white p-1 rounded-md'>
          LogOut
          </button>

      }  
      
      
    
    </div>
  )
}

export default Header
