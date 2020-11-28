import React, { useState } from 'react';
import "../styles/css/Login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from '../StateProvider';
import { actionTypes } from "../reducer";
import Popup from "./Popup";
import SimpleSignIn from "./Auth/SimpleSignIn";
import SimpleSignUp from "./Auth/SimpleSignUp";

function Login() {
    const [state, dispatch] = useStateValue();
    const [show, setShow] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user 
            })
        })
        .catch(error => {
            alert(error.message);
        })

    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-4nzzs1/Slack_Mark_Web.png"
                    alt=""
                />
                <h1 onClick={signIn}>Sign In with Google</h1>
                <hr />
                <h1 onClick={() => setShow(true)}>Sign In with Email</h1>
                <Popup show={show} setShow={setShow}>
                    <SimpleSignIn />
                </Popup> 
                <hr />
                <h1 onClick={() => setShowSignUp(true)}>Sign Up with Email</h1>
                <Popup show={showSignUp} setShow={setShowSignUp}>
                    <SimpleSignUp />
                </Popup>
            </div>
        </div>
    )
}

export default Login
