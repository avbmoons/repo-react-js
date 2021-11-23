import React, { useState } from "react";

//const INITIAL_MESSAGES=['1','2','3','4'];
const INITIAL_MESSAGES=[{author:'', text:'', id:'',}];

export const MessageList=()=>{

    const [messageList,setMessageList] = useState(INITIAL_MESSAGES);

    const [message,setMessage]=useState('');
    const handleSubmitMessage=(e)=>setMessage(e.target.value);

    const addMessage=({author,text})=>{
        setMessageList([...messageList,{message,author:'ME'}])
    }

    return (
    <div className="Chat">
    <div>
        {messageList.map((id,message) => <div key={id}>{message}</div>)}
    </div>;
    <div className="sendForm">
    <form action="submit" onSubmit={addMessage}>
                    <input value={message} onChange={handleSubmitMessage} placeholder={"Message"} type="text"/><button type={"submit"}></button>
                </form>
    </div>
    </div>

    )
};