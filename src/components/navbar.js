import '../styles.css';
import Logo from '../assets/Hearts-Alight-Logo.png';
import {Link} from 'react-router-dom';

export default function Navbar() {
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
                 
                <Link to={"/about"}> About </Link>
                <Link to={"/events"}> Events </Link>
                <Link to={"contacts"}> Contact </Link>
                <Link to={"/donations"}> Donations </Link>
            </div>
            <div className='language'>
                <button> English </button> <br />
                <button> 繁體中文 </button> <br />
                <button> 简体中文 </button>
            </div>
        </div>
        
    )
}

