import React, { useContext } from "react";
import {
    BsFacebook,
    BsTwitter,
    BsInstagram,
    BsPinterest,
    BsSearch
} from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../context/Context";

const Navbar = () => {
    const { user, dispatch } = useContext(Context);

    const PF = "http://localhost:5000/Images/";

    const handleLogout = (e) => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <>
            <div className="w-full h-16 top-0 pt-2 bg-white sticky flex items-center font-josefin-sans z-[999]">
                <div className="basis-1/4  flex justify-center gap-4 text-2xl text-tundora cursor-pointer">
                    <a target="_blank" href="https://www.facebook.com/"><BsFacebook /></a>
                    <a target="_blank" href="https://in.pinterest.com/"><BsPinterest /></a>
                    <a target="_blank" href="https://twitter.com/"><BsTwitter /></a>
                    <a target="_blank" href="https://www.instagram.com/"><BsInstagram /></a>
                </div>
                <div className="basis-1/2 ">
                    <ul className="flex justify-center gap-10 text-2xl font-light cursor-pointer">
                        <li>
                            <Link to="/"> HOME</Link>
                        </li>
                        <li>
                            <Link to="/write"> WRITE</Link>
                        </li>
                        <li>
                            <Link to="/settings"> SETTINGS</Link>
                        </li>
                        <li onClick={handleLogout}>{user && "LOGOUT"} </li>
                    </ul>
                </div>
                <div className="basis-1/4  flex justify-center items-center gap-4 text-lg text-dove-gray">
                    {user ? (
                        <Link to="/settings">
                            <img
                                src={PF + user.profilePic}
                                alt=""
                                className="h-11 w-11 rounded-full cursor-pointer"
                            />
                        </Link>
                    ) : (
                        <ul className="flex justify-center gap-10 text-2xl font-light cursor-pointer text-black">
                            <li>
                                <Link to="/login"> LOGIN</Link>
                            </li>
                            <li>
                                <Link to="/register"> REGISTER</Link>
                            </li>
                        </ul>
                    )}
                    <BsSearch />
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Navbar;
