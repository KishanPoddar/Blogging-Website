import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "redaxios";


const Register = () => {
  const [error, setError] = useState(false)

  const [values, setValues] = useState({
    username: "", email: "", password: "",
  });

  const validateInput = (e)=>{
    setValues({
        ...values,
        [e.target.name]: e.target.value,
    })
  }

  const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setError(false);
    if(!(validateEmail(values.email))){
        return window.alert('Enter the correct email')
    }
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register",{
        ...values,
      });
    res.data && window.location.replace('/login');
    } catch (err) {
        setError(true)
    }
}

  return (
    <div className="h-[94vh] w-full flex flex-col justify-center items-center bgImageRegister ">
            <span className="text-7xl font-lora font-semibold">Sign Up</span>
            <form onSubmit={handleSubmit} className="mt-3 flex flex-col font-varela-round text-lg w-1/4">

                <label className="mt-2">Username</label>
                <input onChange={validateInput} values={values.username} name="username" type="text" className="loginRegisterInput" placeholder="Enter your username..." />

                <label className="mt-2">Email</label>
                <input onChange={validateInput} values={values.email} name="email" type="email" className="loginRegisterInput" placeholder="Enter your email..." />

                <label className="mt-2">Password</label>
                <input onChange={validateInput} values={values.password} name="password" type="password" className="loginRegisterInput" placeholder="Enter your password..." />

                <button type="submit" className=" mt-5 button">Sign Up</button>
            </form>
            {error && <span className='mt-2 text-xl text-red-600'>Something went wrong!</span>}
        </div>
  )
}

export default Register