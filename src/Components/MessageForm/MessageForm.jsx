//import { useState } from "react/cjs/react.development";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import './MessageForm.css';

export function MessageForm({messageList, setMessageList}) {

const AUTHORS=["Charles","Earl","Peter","Carol","Merryl","Robert","Alice","Ruth",];


    const [messageAuthor, setMessageAuthor]=useState("");
    const [messageText, setMessageText]=useState("");

    let authorIndex= Math.floor(Math.random()*AUTHORS.length);
    console.log('author num: '+authorIndex);

    const randomAuthorChange=()=>setMessageAuthor(AUTHORS[authorIndex]);

    //const handleAuthorChange=(e)=>setMessageAuthor(e.target.value);
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
        <input className="Message-author" value={messageAuthor} onChange={randomAuthorChange}></input>
        <input className="Message-input" value={messageText} onChange={handleTextChange} placeholder="your message here..."/>
        <button className="Message-btn" type="submit" onClick={handleAddText}>Send me</button>
    </div>;


}


