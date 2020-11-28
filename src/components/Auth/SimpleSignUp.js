import React, { useState } from 'react';
import "../../styles/css/Login.css";
import { Button } from "@material-ui/core";
import { auth } from "../../firebase";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from "../../reducer"
import db from "../../firebase"

function SimpleSignUp() {
    const [state, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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
    )
}

export default SimpleSignUp
