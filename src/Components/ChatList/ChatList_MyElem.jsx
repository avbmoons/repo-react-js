import "./ChatList.css";

export function ChatList({chatList}){
    return <div className="Chat-list">{chatList.map(({id,name})=>(
        <div className="Chat-list-item" key={id}>
            <span className="Chat-name">{name}</span>
            <p className="Chat-mark">Chat</p>
        </div>        
    ))}

    </div>
};