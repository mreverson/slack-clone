import React, { useState } from 'react';
import "../styles/css/ChatInput.css";
import { Button } from "@material-ui/core";
import { useStateValue } from '../StateProvider';
import db from "../firebase";
import firebase from "firebase";

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();
        if (input) {
            if (channelId) {
                db.collection('rooms').doc(channelId).collection('messages').add({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user: user.displayName ? user.displayName: user.email,
                    userImage: user?.photoURL
                });
            }
            setInput("");
        }
        

    }

    return (
        <div className="chatInput">
            <form>
                <input 
                    placeholder={`Message #${channelName?.toLowerCase()}`} 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <Button type="submit" onClick={sendMessage}>Enter</Button>
            </form>
        </div>
    )
}

export default ChatInput
