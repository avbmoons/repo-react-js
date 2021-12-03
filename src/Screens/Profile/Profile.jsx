import './Profile.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { toggleCheckTextAction,} from '../../Store/Profile/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { profileSelector } from './selectors.js';

export function Profile(){
    const dispatch=useDispatch();

    const {checkText,showText}=useSelector(profileSelector);

    const handleToggleShowText=()=>{
        dispatch(toggleCheckTextAction());
    };

    return(
        <div className="Profile-block">
            <h3 className="Profile-heading">Profile</h3>

            <div className="Check-block">
            <FormControlLabel className="Check-label" control={<Checkbox defaultChecked />} label="" onChange={handleToggleShowText} />

            <p className="Check-text">{showText && checkText}</p>

            </div>
        
        </div>



    );
};
