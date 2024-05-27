import '../styles.css';
import Logo from '../assets/Hearts-Alight-Logo.png';
import {Link} from 'react-router-dom';
import { useStateContext } from './language';

export default function Navbar() {

    const { lang, clickEng, clickTC, clickSC } = useStateContext()

    
    return (
        <div className='Navbar'>
            <div className='Logo'>
                <Link to={"/"}>
                    <img src={Logo} /> 
                </Link>
            </div>
            <div className='HA'>
                {lang.HA}
            </div>
            <div className='rightSide'>
                 
                {lang.About && <Link to={"/about"}> <div className='about'> {lang.About} </div> </Link>}
                {lang.Events && <Link to={"/events"}> <div className='events'> {lang.Events} </div> </Link>}
                {lang.Contacts && <Link to={"contacts"}> <div className='contacts'> {lang.Contacts} </div> </Link>}
                {lang.Donations && <Link to={"/donations"}> <div className='donations'> {lang.Donations} </div> </Link>}
            </div>
            <div className='language'>
                <button className='eng' onClick={clickEng}> English </button> 
                <button className='TC' onClick={clickTC}> 繁體中文 </button> 
                <button className='SC' onClick={clickSC}> 简体中文 </button>
            </div>
        </div>
    )
}