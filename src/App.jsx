import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Router } from "./Router";

import { store } from './Store';

function App() {

  return (
    <Provider store={store}>

    

    <div className="App">
    <div className="Wrapper">
    
    <div className="App-top">
    <header className="App-header">
      <div className="Header-box">
      <h3 className="Header-text">Mini-chat</h3>
      <div className="Header-menu"><Router/></div>
              
      </div>      
    </header>

    <main className="Main">
 
    </main>      
   
      </div>

    <footer className="App-footer">
      <h3 className="Header-text">Mini-chat</h3>       
    </footer>

    </div>
    </div>

    </Provider>

  );
}

export default App;
