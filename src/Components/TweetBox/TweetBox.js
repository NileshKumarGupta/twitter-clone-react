import { Avatar, Button } from '@material-ui/core';
import React from 'react';

import './TweetBox.css';

const TweetBox = () => {
  return(
    <div className="tweetBox">
      <form>
        <div className="tweetBoxInput">
          <Avatar ></Avatar>
          <input placeholder="What's Happening?" type="text"></input>
        </div>
        <div style={{textAlign: 'right'}}>
          <Button className="tweetBoxButton">Tweet</Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;