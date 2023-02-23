import React, { useContext, useRef } from "react";
import { Context } from "../context/Context";
import axios from 'redaxios'

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();

    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(
                "/api/auth/login",
                {
                    username: userRef.current.value,
                    password: passwordRef.current.value
                }
            );
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return (
        <div className="h-[94vh] w-full flex flex-col justify-center items-center bgImageLogin">
            <span className="text-7xl font-lora font-semibold">Login</span>
            <form
                onSubmit={handleSubmit}
                className="mt-3 flex flex-col font-varela-round text-lg w-1/5"
            >
                <label className="mt-2">Username</label>
                <input
                    type="text"
                    ref={userRef}
                    className="loginRegisterInput"
                    placeholder="Enter your username..."
                />

                <label className="mt-2">Password</label>
                <input
                    type="password"
                    ref={passwordRef}
                    className="loginRegisterInput"
                    placeholder="Enter your password..."
                />

                <button type="submit" disabled={isFetching} className=" mt-5 button !bg-lightcoral disabled:cursor-not-allowed">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
