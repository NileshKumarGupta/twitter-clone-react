import { Avatar, Button } from '@material-ui/core';
import React from 'react';

import AvatarIcon from '../../Icons/avatar.png';

import './TweetBox.css';

const TweetBox = () => {
  return(
    <div className="tweetBox">
      <form>
        <div className="tweetBoxAvatar">
          <Avatar src={AvatarIcon} variant="square"></Avatar>
        </div>
        <div className="tweetBoxInput">
          <input placeholder="What's Happening?" type="text"></input>
          <input placeholder="Optional: Image URL" type="text"></input>
          <div style={{textAlign: "right"}}>
          <Button className="tweetBoxButton">Tweet</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;