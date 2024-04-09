import '../styles.css';
import Logo from '../assets/Hearts-Alight-Logo.png';
import {Link} from 'react-router-dom';

export default function NavbarSC() {
    return (
        <div className='Navbar'>
            <div className='Logo'>
                <img src={Logo} /> 
            </div>
            <div className='HA'>
                <Link to={"/"}> 
                    心燃青年团
                </Link>
            </div>
            <div className='rightSide'>
                 
                <Link to={"/about"}> 关于 </Link>
                <Link to={"/events"}> 活动 </Link>
                <Link to={"contacts"}> 练习 </Link>
                <Link to={"/donations"}> 捐献 </Link>
            </div>
            <div className='language'>
                <button> 
                    <Link to={"/navbar"}>
                        English 
                    </Link>
                </button> <br />
                <button> 
                    <Link to={"/navbarTC"}>
                        繁體中文
                    </Link> 
                </button> <br />
                <button> 简体中文 </button>
            </div>
        </div>
        
    )
}
