import '../styles.css';
import Logo from '../assets/Hearts-Alight-Logo.png';
import {Link} from 'react-router-dom';

import NavbarSC from './navbarSC'

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
                <button className='eng'> English </button> <br />
                <button className='TC'> 
                    <Link to={"/navbarTC"}> 
                        繁體中文
                    </Link> 
                </button> <br />
                <button className='SC'> 
                    <Link to={"/navbarSC"}> 
                        简体中文 
                    </Link> 
                </button>
            </div>
        </div>
        
    )
}

