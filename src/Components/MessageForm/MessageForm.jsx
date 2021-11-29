import { useRef, useState } from "react";
import './MessageForm.css';
import { AUTHORS } from "./constants";
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export function MessageForm({messageList, setMessageList}) {

    const [messageAuthor, setMessageAuthor]=useState("");
    const [messageText, setMessageText]=useState("");

    const ref=useRef(null);
    const focus=()=>{ref.current.focus()};

    const showAuthor=()=>setMessageAuthor(AUTHORS.name='ME');

    const handleTextChange=(e)=>setMessageText(e.target.value);

    const handleAddText=(e)=>{
        const newMessage={
            id:'',
            author: AUTHORS.name='ME',
            text: messageText,
        };
        focus();
        setMessageAuthor("");
        setMessageText("");
        return setMessageList([...messageList, newMessage]);
    };

    return <div className="MessageForm" >
        <span className="Message-auth" value={messageAuthor} onChange={showAuthor}></span>
        
        <TextareaAutosize aria-label="minimum height" minRows={2.5} className="Message-input" ref={ref} value={messageText} onChange={handleTextChange} placeholder="your message here..." style={{ width: 400 }} autoFocus/>
        <Button variant="contained" className="Message-btn" type="submit" onClick={handleAddText}>Send</Button>
    </div>;


}


