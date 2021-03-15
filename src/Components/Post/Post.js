import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import VerifiedUserSharpIcon from "@material-ui/icons/VerifiedUserSharp";
import React from "react";

import "./Post.css";

const Post = ({ displayName, userName, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar src={avatar} />
      </div>
      <div className="postBody">
        <div className="postHeader">
          <div className="postHeaderText">
            <h3>
              {displayName}{" "}
              <span className="postHeaderSpecial">
                {verified && <VerifiedUserSharpIcon className="postBadge" />}@
                {userName}
              </span>
            </h3>
          </div>

          <div className="postHeaderDescription">
            <p>{text}</p>
          </div>
        </div>

        <img src={image}></img>

        <div className="postFooter">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
