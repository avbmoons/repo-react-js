import './App.css';
import {Message} from "./Message";
import pict from "./assets/lamps.png"
import { Counter } from './Components/Counter';
import { MessageList } from './Components/MessageList';
import { MessageForm } from './Components/MessageForm/MessageForm';

//const name="Этот текст можно не читать, здесь нет ничего интересного :)";
const nameArr=['11','22','33','44'];
const name=nameArr[3];

function App() {
  return (
    <div className="App">
      <div className="App-top">
      <header className="App-header">
        <div className="Header-box">
        <img className="Header-img" src={pict} alt="pict" />        
        </div>
      </header>          
        
      <main className="Chart-block">
        <Counter/>
        <MessageList/>
        <Message name={name} qwerty={""}/>
        <MessageForm/>
                 
      </main>
      </div>

      <footer className="App-footer"></footer>
     
    </div>
  );
}

export default App;
