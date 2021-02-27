import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import  DonutLargeIcon  from '@material-ui/icons/DonutLarge';  
import  ChatIcon from '@material-ui/icons/Chat'; 
import MoreVertIcon  from '@material-ui/icons/MoreVert';           
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
            <Avatar />
            </div>
            <div className="sidebar-right">
                <DonutLargeIcon />
                <ChatIcon />
                <MoreVertIcon />
            </div>
            <di className="sidebar-search">

            </di>
            <div className="sidebar-chat">

            </div>
        </div>
    )
}

export default Sidebar
