import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import axios from 'redaxios'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()


  useEffect(() => {
    const fetchPosts = async ()=>{
      const res = await axios.get("http://localhost:5000/api/posts" + search)
      setPosts(res.data)
    }
      fetchPosts()
  }, [search])
  

  return (
    <>
      <Header/>
      <div className=''>
        <Posts posts={posts} />
        {/* <Sidebar /> */}
      </div>
    </>
  )
}

export default Home 