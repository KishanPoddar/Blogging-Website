import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {posts?.map((p,i) => (
              <Post key={i} post={p}  />
            ))}
        </div>
    );
};

export default Posts;
