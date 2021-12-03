import React from 'react';
import { useState, useMemo } from 'react';

import '../../Screens/Home/Home.css';

import {MessageList} from '../../Components/MessageList/MessageList.jsx';
import { MessageForm } from '../../Components/MessageForm/MessageForm.jsx';
import {ChatList} from '../../Components/ChatList/ChatList.jsx';
import { INITIAL_MESSAGES } from './constants';
import {BOT_MESSAGES} from './constants';
import { INITIAL_CHAT } from './constants';
import { ChatForm } from '../../Components/ChatForm/ChatForm';

export function Home() {

const [chatList, setChatList]=useState(INITIAL_CHAT);

const [messageList, setMessageList]=useState(INITIAL_MESSAGES);

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

          
        
      <main className="Chat-block">

        <div className="Chat-block-box">        

        <section className="Chat-list-block">
          <article className="Chat-list-box">
            <ChatList chatList={chatList} setChatList={setChatList}/>
          </article>
          <article className="Chat-list-form">
            <ChatForm chatList={chatList} setChatList={setChatList} />
          </article>
         
          
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



  );
}

export default Home;
