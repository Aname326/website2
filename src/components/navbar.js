import '../styles.css';
import Logo from '../assets/Hearts-Alight-Logo.png';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className='Logo'>
                <img src={Logo} /> 
            </div>
            <div className='rightSide'>
                <Link to={"/"}> Home</Link>
            </div>
        </div>
        
    )
}

