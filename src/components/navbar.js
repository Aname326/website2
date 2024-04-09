import '../styles.css';
import Logo from '../assets/Hearts-Alight-Logo.png';
import {Link} from 'react-router-dom';

let lang = 0;

function Langchange() {
    if (lang = 0) {
        
    }
}

export default function Navbar() {
    let lang = 0;
    return (
        <div className='Navbar'>
            <div className='Logo'>
                <img src={Logo} /> 
            </div>
            <div className='HA'>
                <Link to={"/"}> 
                    Hearts Alight
                </Link>
            </div>
            <div className='rightSide'>
                 
                <Link to={"/about"}> <div className='about'> About </div> </Link>
                <Link to={"/events"}> <div className='events'> Events </div> </Link>
                <Link to={"contacts"}> <div className='contacts'> Contacts </div> </Link>
                <Link to={"/donations"}> <div className='donations'> Donations </div> </Link>
            </div>
            <div className='language'>
                <button className='eng'> English </button> <br />
                <button className='TC'> 繁體中文 </button> <br />
                <button className='SC'> 简体中文 </button>
            </div>
        </div>
        
    )
}

