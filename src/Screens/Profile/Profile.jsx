import { useHistory } from "react-router";
import { ROUTES } from "../../Router/constants";
import '../../App.css';
import './Profile.css';

export function Profile(){
    const history=useHistory();

    const handleClick=()=>{history.push(ROUTES.HOME)};
    return(
        <div className="App">
        <div className="Wrapper">
        
        <div className="App-top">

        <main>
        <div>
            <h3 className="Profile-heading" style={{color:'black'}}>Profile here</h3>
            <button onClick={handleClick}>profile page</button>

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