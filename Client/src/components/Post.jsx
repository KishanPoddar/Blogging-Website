import React from 'react'
import { Link } from 'react-router-dom'


const Post = ({post}) => {
  const PF = "/Images/"
  return (
    <div className='mx-5 my-10 w-2/5 border-2 border-gray-200 rounded-2xl shadow-lg shadow-gray-500/50'>
      <Link to={`/post/${post._id}`}>
        {post.photo && (<img src={PF + post.photo} alt="" className='h-96 w-full object-cover rounded-lg' />)}
        <div className='flex flex-col items-center'>
          <div className='font-varela-round text-sm text-be9656 mt-2 gap-2 flex'>
            {post.categories.map((c)=>(
                <span className='cursor-pointer'>{c.name}</span>
            ))}
          </div>
            <span className='font-josefin-sans text-xl font-bold mt-2 cursor-pointer'>{post.title}</span>
          <hr />
          <span className='font-lora text-sm italic text-zinc-400'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='text-tundora font-varela-round text-sm mt-5 leading-6 overflow-hidden text-ellipsis webkitCss p-5'>{post.desc}</p>
      </Link>
    </div>
  )
}

export default Post