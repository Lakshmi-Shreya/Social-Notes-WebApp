
import React from 'react'
import "../css/Login.css"
import { Button } from '@material-ui/core'
import {auth,provider} from "../firebase"
import { useStateValue } from '../context/StateProvider'
import {actionTypes} from "../context/reducer"
function Login() {
  const [state,dispatch]=useStateValue()
  const signIn=()=>{
    auth.signInWithPopup(provider)
    .then(result=>{
      dispatch({
        type:actionTypes.SET_USER,
        user:result.user
      })
    }).catch(error=>{
      alert(error.message)
    })
  }
    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://res.cloudinary.com/slybls/image/upload/v1625741280/favicon_trahmv.png" alt="logo"/>
            <h1>Social Notes</h1>
            <p>Post And View Something Amazing </p>
            </div>
            <Button type="submit" onClick={signIn} >Sign in
             </Button>   
             
            </div>
            
    )
}

export default Login
