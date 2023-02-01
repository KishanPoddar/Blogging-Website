import React from 'react'
import { IoMdAdd } from 'react-icons/io';
import bgImg from '../assets/luis-del.jpg'

const Write = () => {
  return (
    <div className='p-12 w-5/6 mx-auto'>
      <img src={bgImg} alt="" className=' w-11/12 h-[450px] m-auto object-cover rounded-2xl' />
      <form className='w-4/6 relative m-auto'>
        <div className='flex'>
          <label htmlFor="fileInput" className='flex items-center'>
            <IoMdAdd className='h-7 w-7 p-0.5 border-solid border-2 border-gray-600 rounded-full cursor-pointer text-gray-600'/>
          </label>
          <input type="file" id="fileInput" className='hidden'/>
          <input type="text" placeholder='Title' autoFocus={true} className='text-3xl p-5 w-full focus:outline-none'/>
        </div>
        <div>
          <textarea name="" id="" placeholder='Tell your story..' type="text" className='resize-none p-5 w-full focus:outline-none text-xl h-screen'></textarea>
        </div>
        <button className='absolute top-7 -right-16 button'>Publish</button>
      </form>
    </div>
  )
}

export default Write