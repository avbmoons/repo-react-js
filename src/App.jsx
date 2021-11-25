import { useState, useEffect } from 'react';
import {MessageList} from './Components/MessageList/MessageList.jsx';
import { MessageForm } from './Components/MessageForm/MessageForm.jsx';
import {v4 as uuidv4} from "uuid";
import pict from "./assets/kolpak.png";
import './App.css';

function App() {

const INITIAL_MESSAGES={
  id:uuidv4(),
  author:"BOT",
  text:"Hi, lets chatting now!",
};
const BOT_MESSAGES={
  id:uuidv4(),
  author:"BOT",
  text:"Thanks! So, lets keep...",
};

const {messageList, setMessageList}=useState([INITIAL_MESSAGES]);

useEffect(()=>{  
  let timer;
  if (messageList[messageList.length-1].author !=="BOT") {
    timer=setTimeout(()=> {
      setMessageList([...messageList, BOT_MESSAGES]);
    }, 1500);  //  это конец setTimeout
    return ()=> {
      clearTimeout(timer);
    };
  } //  это конец условия
}); //  это конец useEffect

  return (
    <div className="App">
      <div className="App-top">
      <header className="App-header">
        <div className="Header-box">
        <img className="Header-img" src={pict} alt="pict" />
        <h3 className="Header-text">Mini-chat</h3>        
        </div>
      </header>          
        
      <main className="Chat-block">


        <MessageList messageList={messageList} />
        <MessageForm messageList={messageList} setMessageList={setMessageList} />
                 
      </main>
      </div>

      <footer className="App-footer"></footer>
     
    </div>
  );
}

export default App;
