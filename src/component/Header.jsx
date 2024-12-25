import { useNavigate } from 'react-router-dom'
import { LOGO_IMG_URL } from '../utils/Constent'
import { signOut } from 'firebase/auth'
import {auth} from "../utils/firebase"
import { useSelector } from 'react-redux'


const Header = () => {  

  const naviget = useNavigate()
  const user = useSelector((store) => store.user)

  const handelLogOut = (e) => {
    e.preventDefault()
    signOut(auth)
    .then(() => {
      naviget('/')
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
