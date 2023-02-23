import React, { useEffect, useState, useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import axios from "redaxios";
import { Context } from "../context/Context";

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "/Images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(
                "/api/posts/" + path
            );
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [path]);

    const handleDelete = async (e) => {
        try {
            await axios.delete(`/api/posts/${post._id}`, {
                data: { username: user.username }
            });
            window.location.replace("/");
        } catch (error) {}
    };

    const handleUpdate = async (e) => {
        try {
            await axios.put(`/api/posts/${post._id}`, {
                username: user.username,
                title,
                desc    
            });
            setUpdateMode(false);
        } catch (error) {}
    };

    return (
        <div className="basis-3/4">
            <div className="p-6 pr-0 mt-2 flex flex-col">
                {post.photo && (
                    <img
                        src={PF + post.photo}
                        alt=""
                        className="w-full h-[400px] rounded-md object-cover"
                    />
                )}
                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                        className="text-center m-4 font-lora text-4xl font-bold outline-none border-b-[1px] border-b-gray-400"
                    />
                ) : (
                    <h1 className="text-center m-4 mb-0 font-lora text-4xl font-bold">
                        {title}
                        {post.username === user?.username && (
                            <div className="float-right flex gap-2 text-2xl mt-2">
                                <BiEdit
                                    onClick={() => setUpdateMode(true)}
                                    className="cursor-pointer text-teal-700"
                                />
                                <RiDeleteBin6Line
                                    onClick={handleDelete}
                                    className="cursor-pointer text-orange-600"
                                />
                            </div>
                        )}
                    </h1>
                )}
                <div className="flex justify-between mb-4 text-lg font-varela-round text-orange-800">
                    <span>
                        Author:{" "}
                        <Link to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <textarea
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="font-lora text-dove-gray text-lg outline-none"
                    />
                ) : (
                    <p className="font-lora text-dove-gray text-lg first-letter:ml-5 first-letter:text-3xl first-letter:font-bold first-letter:uppercase">
                        {desc}
                    </p>
                )}
                {updateMode && (
                    <button
                        onClick={handleUpdate}
                        className="button w-28 self-end"
                    >
                        Update
                    </button>
                )}
            </div>
        </div>
    );
};

export default SinglePost;
