import '../styles.css';
import Logo from '../assets/Hearts-Alight-Logo.png';
import {Link} from 'react-router-dom';


export default function NavbarTC() {
    return (
        <div className='Navbar'>
            <div className='Logo'>
                <img src={Logo} /> 
            </div>
            <div className='HA'>
                <Link to={"/"}> 
                    心燃青年團
                </Link>
            </div>
            <div className='rightSide'>
                 
                <Link to={"/about"}> 關於 </Link>
                <Link to={"/events"}> 活動 </Link>
                <Link to={"contacts"}> 聯繫 </Link>
                <Link to={"/donations"}> 捐獻 </Link>
            </div>
            <div className='language'>
                <button className='eng'> 
                    <Link to={"/"}>
                        English
                    </Link>
                </button> <br />
                <button className='TC'> 繁體中文 </button> <br />
                <button className='SC'> 
                    <Link to={"/navbarSC"}> 
                        简体中文 
                    </Link> 
                </button>
            </div>
        </div>
        
    )
}

