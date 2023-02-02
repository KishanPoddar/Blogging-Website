import React from "react";
import {
    BsFacebook,
    BsTwitter,
    BsInstagram,
    BsPinterest
} from "react-icons/bs";
import profile from "../assets/profile-2.jpg";

const Sidebar = () => {
    return (
        <div className="basis-1/4 m-6 p-5 bg-slate-50 flex flex-col items-center rounded-xl ">
            <div className="flex flex-col items-center">
                <span className="name-heading">ABOUT ME</span>
                <img src={profile} alt="" className="h-80" />
                <p className="py-5 ml-11 mr-6">
                    Lorem ipsum, dolor sit amet consectetur adicing elit. At sit
                    quisquam suscipit. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Ex veniam nobis unde voluptatem ea laborum
                    autem quas tempore aperiam vitae voluptatibus tempora
                    quaerat, impedit numquam ipsum aliquid, ipsam eum sunt?
                </p>
            </div>
            <div className="w-10/12 flex flex-col items-center my-4">
                <span className="name-heading">CATEGORIES</span>
                <ul className="my-2">
                    <li className="inline-block w-1/2 text-lg text-center cursor-pointer">Tech</li>
                    <li className="inline-block w-1/2 text-lg text-center cursor-pointer">Life</li>
                    <li className="inline-block w-1/2 text-lg text-center cursor-pointer">Music</li>
                    <li className="inline-block w-1/2 text-lg text-center cursor-pointer">Style</li>
                    <li className="inline-block w-1/2 text-lg text-center cursor-pointer">Sport</li>
                    <li className="inline-block w-1/2 text-lg text-center cursor-pointer">Cinema</li>
                </ul>
            </div>
            <div className="w-10/12 flex flex-col items-center mt-2">
                <span className="name-heading">FOLLOW US ON</span>
                <div className="basis-1/4 my-5 flex justify-center gap-4 text-2xl text-tundora cursor-pointer">
                    <BsFacebook />
                    <BsPinterest />
                    <BsTwitter />
                    <BsInstagram />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
