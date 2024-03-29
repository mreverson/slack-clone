import React from 'react';
import '../styles/css/Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { useStateValue } from '../StateProvider';
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useHistory } from 'react-router-dom';


function Header() {
    const [{ user }, dispatch] = useStateValue();
    const history = useHistory();

    const logout = () => {
        auth
        .signOut()
        .then(result => {
            history.push(`/`);
            dispatch({
                type: actionTypes.REMOVE_USER,
            })
        })
        .catch(error => {
            alert(error.message);
        })

    }

    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <div className="header__logout" onClick={logout}>
                    <span>Logout</span>
                </div>
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search Slack Clone" />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
