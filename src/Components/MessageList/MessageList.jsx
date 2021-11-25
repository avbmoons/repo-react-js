import "./MessageList.css";

export function MessageList({messageList}){

    return <div>{messageList.map(({id, author, text,})=>(
            <div className="Message-box" key={id}>
                <span className="Message-author">{author}</span>
                <p className="Message-text">{text}</p>
            </div>               
        ))}
    </div>    
};

