import { useState, useMemo } from 'react';

import './App.css';
import pict from "./assets/kolpak.png";
import {MessageList} from './Components/MessageList/MessageList.jsx';
import { MessageForm } from './Components/MessageForm/MessageForm.jsx';
import {ChatList} from './Components/ChatList/ChatList.jsx';
import {INITIAL_MESSAGES} from './constants.js';
import {BOT_MESSAGES} from './constants.js';
import {CHAT_LIST} from './constants.js';

function App() {

const [chatList, setChatList]=useState(CHAT_LIST);

const [messageList, setMessageList]=useState(INITIAL_MESSAGES);

//const refText=useRef(null);


useMemo(()=>{  
  let timer;
  if (messageList[messageList.length-1].author !=="BOT") {
    timer=setTimeout(()=> {
      setMessageList([...messageList, BOT_MESSAGES]);
    }, 1500);
  }  
    return function() {
      clearTimeout(timer);
      console.log("timer refresh");
    };
// eslint-disable-next-line  
},[messageList]);

  return (
    <div className="App">
      <div className="Wrapper">
      
      <div className="App-top">
      <header className="App-header">
        <div className="Header-box">
        <img className="Header-img" src={pict} alt="pict" />
        <h3 className="Header-text">Mini-chat</h3>        
        </div>
      </header>          
        
      <main className="Chat-block">

        <div className="Chat-block-box">        

        <section className="Chat-list-block">
         <ChatList chatList={chatList} setChatList={setChatList}/> 
        </section>

        <section className="Messages-block">
          <article className="Message-list-block">
            <MessageList messageList={messageList} />
          </article>
          <article className="Message-form-block">
              <MessageForm messageList={messageList} setMessageList={setMessageList} />
          </article>       
        </section>

        </div>         
      </main>
      </div>

      <footer className="App-footer">
        <h3 className="Header-text">Mini-chat</h3>       
      </footer>

     </div>
    </div>
  );
}

export default App;
