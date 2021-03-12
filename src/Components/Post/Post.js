import { Avatar } from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
import React from 'react';

import './Post.css';

const Post = ({displayName, userName, verified, text, image, avatar}) => {
  return (
    <div className="post">

      <div className="postAvatar">
        <Avatar src={image}></Avatar>
      </div>

      <div className="postBody">
        <div className="postHeader">
          <VerifiedUser></VerifiedUser>
        </div>
        <div className="postText">

        </div>

      </div>

    </div>
  )
}

export default Post;