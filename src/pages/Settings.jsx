import React from "react";
import Sidebar from "../components/Sidebar";
import profilePic from '../assets/profile.jpg'
import { BiUserCircle } from 'react-icons/bi'

const Settings = () => {
    return (
        <div className="flex">
            <div className="basis-3/4 p-9">
                <div className="flex justify-between items-center">
                    <span className="text-3xl mb-2 text-red-500">Update Your Account</span>
                    <span className="text-red-600 cursor-pointer text-sm">Delete Account</span>
                </div>
                <form className="flex flex-col">
                    <label className="settingsLabel">Profile Picture</label>
                    <div className="flex items-center my-3 gap-3">
                        <img src={profilePic} alt="Profile Picture" className="h-20 w-20 rounded-3xl object-cover" />
                        <label className="settingsLabel" htmlFor="fileInput">
                            <BiUserCircle className="h-7 w-7 p-0.5 rounded-full bg-pink-400 text-white"/>
                        </label>
                        <input type="file" id="fileInput" className="hidden settingsInput" />
                    </div>
                    <label className="settingsLabel">Username</label>
                    <input className="settingsInput" type="text" placeholder="kishan" />
                    <label className="settingsLabel">Email</label>
                    <input className="settingsInput" type="email" placeholder="kishan@gmail.com" />
                    <label className="settingsLabel">Password</label>
                    <input className="settingsInput" type="password"/>
                    <button className="button w-36 self-center">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
};

export default Settings;
