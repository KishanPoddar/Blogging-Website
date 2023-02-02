import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest, BsSearch } from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom'
import profileImg from '../assets/profile-2.jpg'

const Navbar = () => {
    const user = false;
  return (
    <>
        <div className='w-full h-16 top-0 pt-2 bg-white sticky flex items-center font-josefin-sans z-[999]'>
            <div className='basis-1/4  flex justify-center gap-4 text-2xl text-tundora cursor-pointer'>
                <BsFacebook/>
                <BsPinterest/>
                <BsTwitter/>
                <BsInstagram/>
            </div>
            <div className='basis-1/2 '>
                <ul className='flex justify-center gap-10 text-2xl font-light cursor-pointer'>
                    <li><Link to='/'> HOME</Link></li>
                    <li><Link to='/about'> ABOUT</Link></li>
                    <li><Link to='/contact'> CONTACT</Link></li>
                    <li><Link to='/write'> WRITE</Link></li>
                    <li>{user && "LOGOUT"} </li>
                </ul>
            </div>
            <div className='basis-1/4  flex justify-center items-center gap-4 text-lg text-dove-gray'>
                {
                    user?(
                        <img src={profileImg} alt="" className='h-11 rounded-full' />
                    ) : (
                        <ul className='flex justify-center gap-10 text-2xl font-light cursor-pointer text-black'>
                            <li><Link to='/login'> LOGIN</Link></li>
                            <li><Link to='/register'> REGISTER</Link></li>
                        </ul>
                    )
                }
                <BsSearch/>
            </div>
        </div>
        <div>
            <Outlet />
        </div>
    </>
  )
}

export default Navbar