import React, { useState } from 'react';
import '../styles/css/Profile.css';
import { Dialog, DialogTitle, DialogContent, Modal, Button } from "@material-ui/core";
import { useStateValue } from '../StateProvider';
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useHistory } from 'react-router-dom';


function Popup( props ) {
    const { title, children, show, setShow} = props;
    const [{ user }, dispatch] = useStateValue();
    const history = useHistory();
   
  
    return (
       <Dialog open={show}>
           <DialogTitle>
                <div>
                    {title}
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
                <div>
                    <Button onClick={() => setShow(false)}>Cancel</Button>
                </div>
            </DialogContent>
       </Dialog>
    );
}

export default Popup;
