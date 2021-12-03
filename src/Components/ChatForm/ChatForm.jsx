import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './ChatForm.css';
import { CHAT_MARK } from "./constants";

export function ChatForm({chatList, setChatList}) {

    const [chatName, setChatName]=useState("");
    const [chatMark, setChatMark]=useState("");

    const showChatMark=()=>setChatMark(CHAT_MARK.name);

    const handleChatNameChange=(e)=>setChatName(e.target.value);

    const handleAddChat=(e)=>{
        const newChat={
            id:'',
            name: chatName,
            chatMark: CHAT_MARK.name='Chat',            
        };
        //focus();
        setChatMark("");
        setChatName("");
        return setChatList([...chatList, newChat]);
    };

     return <div className="ChatForm" >
         <span className="Chat-mark" value={chatMark} onChange={showChatMark}></span>
      
        <TextField className="Chat-input" id="standard-basic" label="your new chat here..." variant="standard" value={chatName} onChange={handleChatNameChange} />

        <Button variant="text" className="Chat-btn" onClick={handleAddChat}>ADD&nbsp;&#9658;</Button>
     </div>;


}


