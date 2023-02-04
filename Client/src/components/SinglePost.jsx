import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import axios from "redaxios";

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);

    return (
        <div className="basis-3/4">
            <div className="p-6 pr-0 mt-2">
                {post.photo && (
                    <img
                        src={post.photo}
                        alt=""
                        className="w-full h-[400px] rounded-md object-cover"
                    />
                )}
                <h1 className="text-center m-4 mb-0 font-lora text-4xl font-bold ">
                    {post.title}
                    <div className="float-right flex gap-2 text-2xl mt-2">
                        <BiEdit className="cursor-pointer text-teal-700" />
                        <RiDeleteBin6Line className="cursor-pointer text-orange-600" />
                    </div>
                </h1>
                <div className="flex justify-between mb-4 text-lg font-varela-round text-orange-800">
                    <span>
                        Author: <Link to={`/?user=${post.username}`}><b>{post.username}</b></Link>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="font-lora text-dove-gray text-lg first-letter:ml-5 first-letter:text-3xl first-letter:font-bold">
                    {post.desc}
                </p>
            </div>
        </div>
    );
};

export default SinglePost;
