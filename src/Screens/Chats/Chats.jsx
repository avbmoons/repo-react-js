import { Redirect, useParams } from "react-router";
import { ROUTES } from "../../Router/constants";
import '../../App.css';
import './Chats.css';

export function Chats({chatList}){

    <div><p>some chats here</p></div>
    const {chatId}=useParams();
    console.log({chatId});
    
    if (!chatId || !chatList[chatId]){        
        return <Redirect to={ROUTES.NO_CHAT}/>;
    }

    return(
        <div className="App">
        <div className="Wrapper">
        
        <div className="App-top">
            <main className="Chat-page">
                <div className="Chats-page-box">
                    <h3 className="Chats-page-heading">Chats page</h3>
                       
                </div>                
            </main>


        </div>

        <footer className="App-footer">
            <h3 className="Header-text">Mini-chat</h3>       
        </footer>

        </div>
        </div>

    );
};