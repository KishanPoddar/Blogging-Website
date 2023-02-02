import React from 'react'
import postPic from '../assets/tyler-lastovich.jpg'

const Post = () => {
  return (
    <div className='mx-5 my-10 w-2/5'>
      <img src={postPic} alt="" className='h-80 w-full object-cover rounded-lg' />
      <div className='flex flex-col items-center'>
        <div className='font-varela-round text-sm text-be9656 mt-2 gap-2 flex'>
          <span className='cursor-pointer'>Music</span>
          <span className='cursor-pointer'>Life</span>
        </div>
        <span className='font-josefin-sans text-xl font-bold mt-2 cursor-pointer'>Lorem ipsum dolor sit.</span>
        <hr />
        <span className='font-lora text-sm italic text-zinc-400'>1 hour ago</span>
      </div>
      <p className='text-tundora font-varela-round text-sm mt-5 leading-6 overflow-hidden text-ellipsis webkitCss'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum fuga architecto corrupti quod. Minima consequuntur at, reiciendis sequi iure omnis odio beatae nihil! Id odio amet expedita officiis, nihil non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae quia tenetur voluptatum odio minima officia vel inventore cum quibusdam eius incidunt accusamus, autem amet dolorum. Nulla maiores magni quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui et at asperiores voluptatum natus ipsam commodi voluptas ullam aut, dolores tempore numquam provident obcaecati omnis minus culpa, sed ex hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit accusantium eius aperiam dolorum necessitatibus dignissimos, optio deserunt impedit quas itaque hic nam cupiditate, sapiente totam qui earum veritatis reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima minus fugiat ullam deleniti fuga ab non molestias magnam enim! Voluptatem commodi nemo, amet quam corrupti repellat unde aut consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit temporibus odit asperiores qui adipisci officia quos accusamus atque ad nobis, corporis ex cum explicabo. Eligendi numquam dolores nihil reprehenderit! Numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum libero voluptate debitis non provident, vitae necessitatibus iste iusto voluptates, commodi omnis? In repudiandae, molestiae earum recusandae nihil similique. Quidem, nam?
      </p>
    </div>
  )
}

export default Post