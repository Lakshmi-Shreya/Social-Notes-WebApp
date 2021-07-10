import React,{useState} from 'react'
import "../css/MessageSender.css"
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import { useStateValue } from '../context/StateProvider';
import db from '../firebase';
import firebase from 'firebase';
function MessageSender() {
    const [input,setInput]=useState("")
    const [imageUrl, setImageUrl]=useState("")
    const [{user},dispatch]=useStateValue()
  const handleSubmit=(e)=>{
    //   preventing refreshing of page upon form submission
    e.preventDefault();
    // adding data to firestore
    db.collection('posts')
    .add({
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        profilePic:user.photoURL,
        username:user.displayName,
        image:imageUrl

    })
    setInput("")
    setImageUrl("")
  }


    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input className="messageSender__input" placeholder={`About to post Something ${user.displayName}?`}
                    value={input} onChange={e=>setInput(e.target.value)}/>
                    <input placeholder={`Image url (optional)`}
                    value={imageUrl}onChange={e=>setImageUrl(e.target.value)}/>
                    <button type="submit" onClick={handleSubmit}>Hidden submit</button>
                    

                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                <VideocamIcon style={{color:"red"}}/>
                <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                <PhotoLibraryIcon style={{color:" green"}}/>
                <h3>Photos/Videos</h3>
                </div>
                <div className="messageSender__option">
                <MoodIcon style={{color:"orange"}}/>
                <h3>Mood</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
