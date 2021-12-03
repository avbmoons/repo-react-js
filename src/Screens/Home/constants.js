import {v4 as uuidv4} from "uuid";
//import { CHAT_MARK } from "../../Components/ChatForm/constants";


export const INITIAL_MESSAGES=[
    {
    id:uuidv4(),
    author:"BOT",
    text:"Hi, lets chatting now!",
  }];

export const BOT_MESSAGES={
    id:uuidv4(),
    author:"BOT",
    text:"Thanks! So, lets keep...",
  };

export const INITIAL_CHAT=[
    {
      id:uuidv4(),
      name:"First chat",
      chatMark: "Chat", 
    },

  ];
