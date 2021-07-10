import React from "react"
import "../css/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar,IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "../context/StateProvider";

function Header(){

    const [{user},dispatch]=useStateValue()
return(

    <div className="header">
    <div className="header__left">
        <img src="https://res.cloudinary.com/slybls/image/upload/v1625741280/favicon_trahmv.png" alt="Logo"/>
        <div className="header__input">
            <SearchIcon/>
            <input type="text" placeholder="Search Socialites"/>
        </div>
    </div>
    <div className="header__center">
        <div className="header__options  header__options--active">
            <HomeIcon fontSize="large"/>
        </div>
        <div className="header__options">
            <FlagIcon fontSize="large"/>
        </div>
        <div className="header__options">
            <SubscriptionsIcon fontSize="large"/>
        </div>
        <div className="header__options">
            <StorefrontIcon fontSize="large"/>
        </div>
        <div className="header__options">
            <SupervisedUserCircleIcon fontSize="large"/>
        </div>
        
    </div>
    <div className="header__right">
    <div className="header__info">
        <Avatar src={user.photoURL}/>
        <h4>{user.displayName}</h4>
    </div>
      <IconButton>
         <AddIcon/>
      </IconButton>
      <IconButton>
        <ForumIcon/>
      </IconButton>
      <IconButton>
        <NotificationsActiveIcon/>
      </IconButton>
      <IconButton>
        <ExpandMoreIcon/>
      </IconButton>
    </div>
    </div>
)

}

export default Header;