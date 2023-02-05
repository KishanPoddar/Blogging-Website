import React, { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Context } from "../context/Context";
import axios from "redaxios";

const Write = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("http://localhost:5000/api/upload", data);
            } catch (error) {}
        }
        try {
            const res = await axios.post(
                "http://localhost:5000/api/posts",
                newPost
            );
            window.location.replace("/post/" + res.data._id);
        } catch (error) {}
    };

    return (
        <div className="p-12 w-5/6 mx-auto">
            {file && (
                <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className=" w-11/12 h-[450px] m-auto object-cover rounded-2xl"
                />
            )}
            <form onSubmit={handleSubmit} className="w-4/6 relative m-auto">
                <div className="flex">
                    <label htmlFor="fileInput" className="flex items-center">
                        <IoMdAdd className="h-7 w-7 p-0.5 border-solid border-2 border-gray-600 rounded-full cursor-pointer text-gray-600" />
                    </label>

                    <input type="file" id="fileInput" className="hidden" onChange={(e)=>setFile(e.target.files[0])} />
                    <input
                        type="text"
                        placeholder="Title"
                        autoFocus={true}
                        className="text-3xl p-5 w-full focus:outline-none"
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </div>

                <div>
                    <textarea
                        name=""
                        id=""
                        placeholder="Tell your story.."
                        type="text"
                        className="resize-none p-5 w-full focus:outline-none text-xl h-screen"
                        onChange={(e)=>{setDesc(e.target.value)}}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="absolute top-7 -right-16 button"
                >
                    Publish
                </button>
            </form>
        </div>
    );
};

export default Write;
