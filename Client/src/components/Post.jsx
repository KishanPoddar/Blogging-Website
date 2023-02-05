import React from 'react'
import { Link } from 'react-router-dom'


const Post = ({post}) => {
  const PF = "http://localhost:5000/Images/"
  return (
    <div className='mx-5 my-10 w-2/5'>
      {post.photo && (<img src={PF + post.photo} alt="" className='h-80 w-full object-cover rounded-lg' />)}
      <div className='flex flex-col items-center'>
        <div className='font-varela-round text-sm text-be9656 mt-2 gap-2 flex'>
          {post.categories.map((c)=>(
              <span className='cursor-pointer'>{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className='font-josefin-sans text-xl font-bold mt-2 cursor-pointer'>{post.title}</span>
        </Link>
        <hr />
        <span className='font-lora text-sm italic text-zinc-400'>{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className='text-tundora font-varela-round text-sm mt-5 leading-6 overflow-hidden text-ellipsis webkitCss'>{post.desc}</p>
    </div>
  )
}

export default Post