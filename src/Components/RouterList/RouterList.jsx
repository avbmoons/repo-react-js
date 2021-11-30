import { Link } from "react-router-dom";
import {ROUTES} from "../../Router/constants.js";
import './RouterList.css';

//import {Home} from "../../Screens/Home";
//import { Chats } from '../../Screens/Chats/Chats';
//import { Profile } from '../../Screens/Profile/Profile';

export function RouterList(){

return(
<ul className="Header-menu">
<li className="Header-menu-item"><Link to={ROUTES.HOME}>Home</Link></li>
<li className="Header-menu-item"><Link to={ROUTES.CHAT}>Chats</Link></li>
<li className="Header-menu-item"><Link to={ROUTES.PROFILE}>Profile</Link></li>
<li className="Header-menu-item"><Link to={ROUTES.NOT_FOUND}>not found 404</Link></li>
</ul>
)
};