import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import { BiUserCircle } from "react-icons/bi";
import { Context } from "../context/Context";
import axios from "redaxios";
import { CgProfile } from "react-icons/cg";

const Settings = () => {
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState(false);
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    });

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/Images/";

    const validateInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(values.email)) {
            return window.alert("Enter the correct email");
        }
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            ...values
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("http://localhost:5000/api/upload", data);
            } catch (error) {}
        }
        try {
            const res = await axios.put(
                "http://localhost:5000/api/users/" + user._id,
                updatedUser
            );
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (error) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };

    return (
        <div className="flex">
            <div className="basis-3/4 p-9">
                <div className="flex justify-between items-center">
                    <span className="text-3xl mb-2 text-red-500">
                        Update Your Account
                    </span>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label className="settingsLabel">Profile Picture</label>
                    <div className="flex items-center my-3 gap-3">
                        {user.profilePic ? (
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : PF + user.profilePic
                                }
                                alt="Profile Picture"
                                className="h-20 w-20 rounded-3xl object-cover"
                            />
                        ) : (
                            <CgProfile className="h-14 w-14 p-3 rounded-2xl border-2 border-black" />
                        )}
                        <label className="settingsLabel !mt-0" htmlFor="fileInput">
                            <BiUserCircle className="h-7 w-7 p-0.5 rounded-full bg-pink-400 text-white flex" />
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            className="hidden settingsInput"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label className="settingsLabel">Username</label>
                    <input
                        className="settingsInput"
                        type="text"
                        placeholder={user.username}
                        onChange={validateInput}
                        values={values.username}
                        name="username"
                    />
                    <label className="settingsLabel">Email</label>
                    <input
                        className="settingsInput"
                        type="email"
                        placeholder={user.email}
                        onChange={validateInput}
                        values={values.email}
                        name="email"
                    />
                    <label className="settingsLabel">Password</label>
                    <input
                        className="settingsInput"
                        type="password"
                        onChange={validateInput}
                        values={values.password}
                        name="password"
                    />
                    <button type="submit" className="button w-36 self-center">
                        Update
                    </button>
                    {success && (
                        <span className="text-green-700 font-medium text-center mt-3">
                            Profile has been updated...
                        </span>
                    )}
                </form>
            </div>
            {/* <Sidebar /> */}
        </div>
    );
};

export default Settings;
