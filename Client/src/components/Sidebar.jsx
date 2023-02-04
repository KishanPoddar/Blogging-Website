import React, { useState, useEffect } from "react";
import {
    BsFacebook,
    BsTwitter,
    BsInstagram,
    BsPinterest
} from "react-icons/bs";
import profile from "../assets/profile-2.jpg";
import axios from "redaxios";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("http://localhost:5000/api/categories/");
            setCats(res.data);
        };
        getCats();
    }, []);

    return (
        <div className="basis-1/4 m-6 p-5 bg-slate-50 flex flex-col items-center rounded-xl ">
            <div className="flex flex-col items-center">
                <span className="name-heading">ABOUT ME</span>
                <img src={profile} alt="" className="h-80" />
                <p className="py-5 ml-11 mr-6">
                    Lorem ipsum, dolor sit amet consectetur adicing elit. At sit
                    quisquam suscipit. Lorem ipsum dolor, sit amet consectetur
                </p>
            </div>
            <div className="w-10/12 flex flex-col items-center my-4">
                <span className="name-heading">CATEGORIES</span>
                <ul className="my-2 w-9/12">
                    {cats.map((c,i)=>(
                        <Link to={`/?cat=${c.name}`}>
                            <li key={i} className="inline-block w-1/2 text-lg text-center cursor-pointer">{c.name}</li>
                        </Link>

                        ))}
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
