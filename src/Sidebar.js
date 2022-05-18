import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core'


const Sidebar = () => {

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
                <Avatar className="sidebar__avatar" src="https://static.wikia.nocookie.net/villains/images/3/37/Anton-chigurh-no-country-for-old-men.jpg" alt="Anton Chigurh" />
                <h2>Atul Bhatt</h2>
                <h4>atulbhatt61@gmail.com</h4>
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