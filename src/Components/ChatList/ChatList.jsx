import "./ChatList.css";

export function ChatList({chatList}){
    return <div className="Chat-list">{chatList.map(({id,name})=>(
        <button className="Chat-list-btn" key={id}>
        <div className="Chat-list-item">
            <span className="Chat-name">{name}</span>
            <p className="Chat-mark">Chat</p>
        </div>            
        </button>

               
    ))}

    </div>
};