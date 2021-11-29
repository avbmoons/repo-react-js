import {v4 as uuidv4} from "uuid";
import "./MessageList.css";

export function MessageList({messageList}){

    return <div className="Message-list-box">{messageList.map(({id, author, text,})=>(
            <div className="Message-box" key={uuidv4()}>
                <span className="Message-author">{author}</span>
                <p className="Message-text">{text}</p>
            </div>               
        ))}
    </div>    
};

