import React, { useContext } from "react";
import {
    BsFacebook,
    BsTwitter,
    BsInstagram,
    BsPinterest,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../context/Context";

const Navbar = () => {
    const { user, dispatch } = useContext(Context);

    const PF = "/Images/";

    const handleLogout = (e) => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <>
            <div className="w-full h-16 top-0 pt-2 bg-white sticky flex justify-center items-center font-josefin-sans z-[999]">
                <div className="basis-1/4  lg:flex justify-center gap-4 text-2xl text-tundora cursor-pointer hidden">
                    <a target="_blank" href="https://www.facebook.com/">
                        <BsFacebook />
                    </a>
                    <a target="_blank" href="https://in.pinterest.com/">
                        <BsPinterest />
                    </a>
                    <a target="_blank" href="https://twitter.com/">
                        <BsTwitter />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/">
                        <BsInstagram />
                    </a>
                </div>
                <div className="lg:basis-1/2 block">
                    <ul className="flex justify-center sm:gap-10 gap-4 sm:text-2xl text-base font-light cursor-pointer">
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
                <div className="basis-1/4 lg:flex hidden justify-center items-center gap-4 text-lg text-dove-gray">
                    {user ? (
                        <Link to="/settings">
                            {user.profilePic ? (
                                <img
                                    src={PF + user.profilePic}
                                    alt=""
                                    className="h-11 w-11 rounded-full cursor-pointer"
                                />
                            ) : (
                                <CgProfile className="w-7 h-7 font-light" />
                            )}
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
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Navbar;
