import React from "react";
import postImg from "../assets/kinkate-green.jpg";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const SinglePost = () => {
    return (
        <div className="basis-3/4">
            <div className="p-6 pr-0 mt-2">
                <img
                    src={postImg}
                    alt=""
                    className="w-full h-[400px] rounded-md object-cover"
                />
                <h1 className="text-center m-4 mb-0 font-lora text-4xl font-bold ">
                    Lorem ipsum dolor sit.
                    <div className="float-right flex gap-2 text-2xl mt-2">
                        <BiEdit className="cursor-pointer text-teal-700"/>
                        <RiDeleteBin6Line className="cursor-pointer text-orange-600"/>
                    </div>
                </h1>
                <div className="flex justify-between mb-4 text-lg font-varela-round text-orange-800">
                    <span>
                        Author: <b>Kishan</b>
                    </span>
                    <span>1 hour ago</span>
                </div>
                <p className="font-lora text-dove-gray text-lg first-letter:ml-5 first-letter:text-3xl first-letter:font-bold">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perferendis explicabo aliquid ullam quidem repudiandae
                    inventore eum cumque maxime veniam assumenda? Debitis quod
                    omnis cupiditate pariatur unde magni neque facilis
                    distinctio! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Perferendis explicabo aliquid ullam quidem
                    repudiandae inventore eum cumque maxime veniam assumenda?
                    Debitis quod omnis cupiditate pariatur unde magni neque
                    facilis distinctio! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Perferendis explicabo aliquid ullam quidem
                    repudiandae inventore eum cumque maxime veniam assumenda?
                    Debitis quod omnis cupiditate pariatur unde magni neque
                    facilis distinctio! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Perferendis explicabo aliquid ullam quidem
                    repudiandae inventore eum cumque maxime veniam assumenda?
                    Debitis quod omnis cupiditate pariatur unde magni neque
                    facilis distinctio! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Perferendis explicabo aliquid ullam quidem
                    repudiandae inventore eum cumque maxime veniam assumenda?
                    Debitis quod omnis cupiditate pariatur unde magni neque
                    facilis distinctio! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Perferendis explicabo aliquid ullam quidem
                    repudiandae inventore eum cumque maxime veniam assumenda?
                    Debitis quod omnis cupiditate pariatur unde magni neque
                    facilis distinctio! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Perferendis explicabo aliquid ullam quidem
                    repudiandae inventore eum cumque maxime veniam assumenda?
                    Debitis quod omnis cupiditate pariatur unde magni neque
                    facilis distinctio! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Perferendis explicabo aliquid ullam quidem
                    repudiandae inventore eum cumque maxime veniam assumenda?
                    Debitis quod omnis cupiditate pariatur unde magni neque
                    facilis distinctio! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Perferendis explicabo aliquid ullam quidem
                    repudiandae inventore eum cumque maxime veniam assumenda?
                    Debitis quod omnis cupiditate pariatur unde magni neque
                    facilis distinctio! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Perferendis explicabo aliquid ullam quidem
                    repudiandae inventore eum cumque maxime veniam assumenda?
                    Debitis quod omnis cupiditate pariatur unde magni neque
                    facilis distinctio! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Perferendis explicabo aliquid ullam quidem
                    repudiandae inventore eum cumque maxime veniam assumenda?
                    Debitis quod omnis cupiditate pariatur unde magni neque
                    facilis distinctio!
                </p>
            </div>
        </div>
    );
};

export default SinglePost;
