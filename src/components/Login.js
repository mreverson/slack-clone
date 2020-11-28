import React, { useState } from 'react';
import "../styles/css/Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from '../StateProvider';
import { actionTypes } from "../reducer"

function Login() {
    const [state, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailSignIn, setEmailSignIn] = useState('');
    const [passSignIn, setPassSignIn] = useState('');

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

    const signInSimple = () => {
        auth
        .signInWithEmailAndPassword(emailSignIn, passSignIn)
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

    const signUpSimple = () => {
        auth
        .createUserWithEmailAndPassword(email, pass)
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
                <Button onClick={signIn}>Sign In</Button>
                <hr />
                <div className="signin">
                    <h1>Sign In with Email</h1>
                    <form>
                        <input
                            placeholder={`Email`}
                            value={emailSignIn}
                            onChange={e => setEmailSignIn(e.target.value)}
                        />
                        <input
                            placeholder={`Password`}
                            type={'password'} 
                            value={passSignIn}
                            onChange={e => setPassSignIn(e.target.value)}
                        />
                        <br />
                        <Button onClick={signInSimple}>Sign In</Button>
                    </form>
                </div>
                <hr />
                <div className="signup">
                    <h1>Sign Up with Email</h1>
                    <form>
                        <input
                            placeholder={`Email`} 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            placeholder={`Password`}
                            type={'password'} 
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                        />
                        <br />
                        <Button onClick={signUpSimple}>Sign Up</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
