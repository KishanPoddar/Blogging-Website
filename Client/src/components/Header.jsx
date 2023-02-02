import React from 'react'
import scenery from '../assets/ian-beckley.jpg'

const Header = () => {
  return (
    <div className='mt-14'>
        <div className=' flex flex-col items-center font-lora text-tundora'>
            <span className='absolute text-8xl'>Blog</span>
        </div>
            <img src={scenery} alt="" className='w-full h-[50rem] mt-14 object-cover ' />
    </div>
  )
}

export default Header