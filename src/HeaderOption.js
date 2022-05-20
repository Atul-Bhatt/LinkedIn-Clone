import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';

function HeaderOption({avatar, altAvatar, Icon, title, onClick}) {
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            {altAvatar &&
            <Avatar className='headerOption__icon' src={avatar} >{ altAvatar }</Avatar> }
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    );
}

export default HeaderOption;