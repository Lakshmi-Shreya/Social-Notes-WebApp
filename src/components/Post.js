import React from 'react'
import "../css/Post.css"
import{Avatar} from "@material-ui/core"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Post({profilePic,image,username,timestamp,message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img  src={image} onError={(e) => e.target.style.display='none' }alt=" " />
            </div>
            <div className="post__options">
                <div className="post__option">
                   <ThumbUpIcon/>
                   <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <ShareIcon/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                    
                </div>
            </div>
        </div>
    )
}

export default Post
