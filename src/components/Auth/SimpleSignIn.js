import React, { useState } from 'react';
import "../../styles/css/Login.css";
import { Button } from "@material-ui/core";
import { auth } from "../../firebase";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from "../../reducer"

function SimpleSignIn() {
    const [state, dispatch] = useStateValue();
    const [emailSignIn, setEmailSignIn] = useState('');
    const [passSignIn, setPassSignIn] = useState('');

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

    return (
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
    )
}

export default SimpleSignIn
