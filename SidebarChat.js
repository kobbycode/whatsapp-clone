import React, {useState, useEffect} from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from "./firebase";

function SidebarChat({ id, name, addNewChat}) {
const [seed, setSeed] = useState ("");

useEffect(() => {
setSeed(Math.floor(Math.random() * 5000));
}, []);


const createChat = () => {
    const roomName = prompt("Enter name for chat");

    if (roomName) {
        // Database stuff........
        db.collections('rooms').add({
            name: roomName,
        });
    }
};


    return  !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last seen...</p>
            </div>
        </div>
    ) : (
   <div onClick={createChat}
   className="sidebarChat">
   <h2>Add new Chat</h2>
   </div>
    );
}

export default SidebarChat
