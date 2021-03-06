import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import './Chat.css';



function Chat() {
    const [input, setInput] = useState ("");
    const [seed, setSeed] = useState ("");

useEffect(() => {
setSeed(Math.floor(Math.random() * 5000));
}, []);
      

    const sendMessage = (e) => {
     e.preventDefault();
      setInput ("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
           <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

           <div className="chat__headerInfo">
               <h3>Chat name</h3>
               <p>Last seen at.....</p>
           </div>

           <div className="chat__headerRight">
          <IconButton>
              <SearchOutlined />
          </IconButton>
          <IconButton>
              <AttachFile />
          </IconButton>
          <IconButton>
              <MoreVert />
          </IconButton>
           </div>
            </div>
            <div className="chat__body">
             <p className={`chat__message ${true && 'chat__receiver'}`}>
                 <span className="chat__name">Alex Ofori
                 </span>
                 Hello folks

                <span className="chat__timestamp">
                    2:15pm
                </span>
             </p>
            </div>
            <div className="chat__footer">
             <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) =>
                    setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
             <MicIcon />
            </div>
        </div>
    );
}

export default Chat
