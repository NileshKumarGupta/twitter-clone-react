import React, { useEffect, useState } from "react";

import "./Feed.css";

import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import Widget from "../Widget/Widget";
import db from "../../firebase";

import AvatarIcon from "../../Icons/Profile-Avatar-PNG.png";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Feed;
