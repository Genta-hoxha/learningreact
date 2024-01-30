import React from "react";
import User from "./components/User";
import Post from "./components/Post";

const Reuse = ({ type, data }) => {
  return (
    <div>
      {type === "user" && <User {...data} />}
      {type === "post" && <Post {...data} />}
    </div>
  );
};

export default Reuse;
