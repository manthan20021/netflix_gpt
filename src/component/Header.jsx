import React from 'react'
import { LOGO_IMG_URL } from '../utils/Constent'

const Header = () => {
  return (
    <div className='w-full'>
    <div className='px-12 mx-32'>
      <img className='h-20' src={LOGO_IMG_URL} alt="netflex logo" />
    </div>
    </div>
  )
}

export default Header
