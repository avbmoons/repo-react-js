import logo from './logo.svg';
import './App.css';
import {Message} from "./Message";
import pict from "./lamps.png"

const name="Этот текст можно не читать, здесь нет ничего интересного :)";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={pict} alt="pict" />
        <div className="Heading">Сообщения для вас:</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Message name={name} qwerty={""}/>

      </header>
    </div>
  );
}

export default App;
