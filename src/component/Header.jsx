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
    <div className='absolute h-16 w-full bg-gradient-to-b from-blue-950 flex justify-between items-center px-5'>
      <img className='sm:h-16 h-3' src={LOGO_IMG_URL} alt="netflex logo" />
      {
        user && <button 
        onClick={handelLogOut}
        className='
        bg-red-500 sm:font-semibold text-white sm:px-3 sm:py-1 sm:text-md sm:text-[14px] text-[10px] sm:rounded-sm px-[1px]  '>
          LogOut
          </button>

      }  
      
      
    
    </div>
  )
}

export default Header
