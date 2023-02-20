import React from 'react'
import scenery from '../assets/ian-beckley.jpg'

const Header = () => {
  return (
    <div className='sm:mt-14 mt-7'>
        <div className=' flex flex-col items-center font-lora text-tundora'>
            <span className='absolute sm:text-8xl text-6xl'>Blog</span>
        </div>
            <img src={scenery} alt="" className='w-full sm:h-[50rem] h-[30rem] sm:mt-14 mt-8 object-cover ' />
    </div>
  )
}

export default Header