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
                Hearts Alight
            </div>
            <div className='rightSide'>
                <Link to={"/"}> Home </Link>
                <Link to={"/about"}> About </Link>
                <Link to={"/events"}> Events </Link>
                <Link to={"/donations"}> Donations </Link>
            </div>
        </div>
        
    )
}

