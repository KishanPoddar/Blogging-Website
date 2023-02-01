import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest, BsSearch } from 'react-icons/bs';

const Navbar = () => {
  return (
    <>
        <div className='w-full h-14 top-0 pt-2 bg-white sticky flex items-center font-josefin-sans z-[999]'>
            <div className='basis-1/4  flex justify-center gap-4 text-2xl text-tundora cursor-pointer'>
                <BsFacebook/>
                <BsPinterest/>
                <BsTwitter/>
                <BsInstagram/>
            </div>
            <div className='basis-1/2 '>
                <ul className='flex justify-center gap-10 text-lg font-light cursor-pointer'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>WRITE</li>
                    <li>LOGOUT</li>
                </ul>
            </div>
            <div className='basis-1/4  flex justify-center text-lg text-dove-gray'>
                <BsSearch/>

            </div>

        </div>
    </>
  )
}

export default Navbar