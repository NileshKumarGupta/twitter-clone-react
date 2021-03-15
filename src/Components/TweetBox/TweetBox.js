import { Avatar, Button } from "@material-ui/core";
import React from "react";

import AvatarIcon from "../../Icons/avatar.png";

import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxInput">
          <Avatar></Avatar>
          <input placeholder="What's Happening"></input>
        </div>
        <input
          className="tweetBoxInputImage"
          placeholder="Optional: Enter Image URL"
        ></input>
        <Button className="tweetBoxButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
