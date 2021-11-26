import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './MessageForm.css';

export function MessageForm({messageList, setMessageList}) {

const AUTHORS=["Charles","Earl","Peter","Carol","Merryl","Robert","Alice","Ruth",];


    const [messageAuthor, setMessageAuthor]=useState("");
    const [messageText, setMessageText]=useState("");

    let authorIndex= Math.floor(Math.random()*AUTHORS.length);
    console.log('author num: '+authorIndex);

    const randomAuthorChange=()=>setMessageAuthor(AUTHORS[authorIndex]);

    const handleTextChange=(e)=>setMessageText(e.target.value);

    const handleAddText=(e)=>{
        const newMessage={
            id:uuidv4(),
            author: messageAuthor,
            text: messageText,
        };
        setMessageAuthor("");
        setMessageText("");
        return setMessageList([...messageList, newMessage]);
    };

    return <div className="MessageForm" >
        <TextField className="Message-author" id="outlined-basic" label="your text..." variant="outlined" value={messageAuthor} onChange={randomAuthorChange} InputProps={{readOnly: true,}}/>
        <TextField className="Message-input" id="outlined-basic" label="your text here..." variant="outlined" value={messageText} onChange={handleTextChange}/>
        <button className="Message-btn" type="submit" onClick={handleAddText}>Send me</button>
        <Button className="Message-btn" variant="contained" onClick={handleAddText}>Send me</Button>
        </div>;
    


}


