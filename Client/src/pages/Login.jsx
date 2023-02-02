import React from "react";
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="h-[94vh] w-full flex flex-col justify-center items-center bgImageLogin">
            <span className="text-7xl font-lora font-semibold">Login</span>
            <form className="mt-3 flex flex-col font-varela-round text-lg w-1/5">

                <label className="mt-2">Email</label>
                <input type="email" className="loginRegisterInput" placeholder="Enter your email..." />

                <label className="mt-2">Password</label>
                <input type="password" className="loginRegisterInput" placeholder="Enter your password..." />
                
                <button className=" mt-5 button !bg-lightcoral">Login</button>
            </form>
            <button className="absolute top-[4.5rem] right-8 button"><Link to='/register'>Register</Link></button>
        </div>
    );
};

export default Login;
