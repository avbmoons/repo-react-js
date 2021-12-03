import { Link } from "react-router-dom";
import {ROUTES} from "../../Router/constants.js";
import './RouterList.css';


export function RouterList(){

return(
<ul className="Header-menu-list">
<li className="Header-menu-item"><Link to={ROUTES.HOME}>Home</Link></li>
<li className="Header-menu-item"><Link to={ROUTES.CHAT}>Chats</Link></li>
<li className="Header-menu-item"><Link to={ROUTES.PROFILE}>Profile</Link></li>

</ul>
)
};