import React from 'react';
import './App.css';
import { Router } from "./Router";

function App() {

  return (
    <div className="App">
    <div className="Wrapper">
    
    <div className="App-top">
    <header className="App-header">
      <div className="Header-box">
      <h3 className="Header-text">Mini-chat</h3>
      <div className="Header-menu"><Router/></div>
              
      </div>      
    </header>      
   
      </div>

<footer className="App-footer">
  <h3 className="Header-text">Mini-chat</h3>       
</footer>

</div>
</div>

  );
}

export default App;
