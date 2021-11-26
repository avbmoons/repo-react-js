import "./MessageList.css";
import TextField from '@mui/material/TextField';

export function MessageList({messageList}){

    return <div>{messageList.map(({id, author, text,})=>(
            <div className="Message-box" key={id}>
                <TextField className="Message-author" id="outlined-basic" label="author" variant="outlined" value={author} />
                <TextField className="Message-text" id="outlined-basic" label="your message:" variant="outlined" value={text} />
            </div>               
        ))}
    </div>    
};

