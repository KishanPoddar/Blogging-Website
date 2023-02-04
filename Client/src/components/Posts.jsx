import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
    return (
        <div className="basis-3/4 flex flex-wrap justify-center">
            {posts?.map((p,i) => (
              <Post key={i} post={p}  />
            ))}
            {/* <Post  /> */}
            {/* <Post  /> */}
            {/* <Post  /> */}
        </div>
    );
};

export default Posts;
