import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


const Sidebar = () => {

    const user = useSelector(selectUser);

    const recentItems = item => {
        return (
            <div className="sidebarBottom__recentItem">
                <span className="recentItem__hash">#</span>
                <p>{ item }</p>
            </div>
        );
    }

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470" alt='' />
                <Avatar className="sidebar__avatar" src={user.photoUrl} alt="Anton Chigurh" > { user.email[0] } </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,143</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on posts</p>
                    <p className="sidebar__statNumber">34,221</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                { recentItems("reactjs") }
                { recentItems("programming") }
                { recentItems("socialnetworking") }
                { recentItems("developer") }
                { recentItems("cloning") }
                { recentItems("design") }
                { recentItems("javascript") }
            </div>
        </div>
    );
}

export default Sidebar;