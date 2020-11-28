import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import { Button } from "@material-ui/core";
import db from "../firebase"

function Profile() {
    const [{ user }] = useStateValue();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    

    return (
        <div className="profile">
            <div className="profile__info">
                <p>{user?.displayName}</p>
            </div>
            <div className="profile__form">
                <form>
                    <input 
                        placeholder={'Full Name'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder={'Email'} 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Button type="submit">Update Info</Button>
                </form>
            </div>
        </div>
    )
}

export default Profile
