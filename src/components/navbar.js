import '../styles.css';
import Logo from '../assets/Hearts-Alight-Logo.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [lang, setLang] = useState({
        About: "About",
        Events: "Events",
        Contacts: "Contacts",
        Donations: "Donations"
    }); 

    const clickEng = () => {
        setLang(previousState => {
            return {
                ...previousState,
                About: "About",
                Events: "Events",
                Contacts: "Contacts",
                Donations: "Donations"
            }
        })
    }

    const clickTC = () => {
        setLang(previousState => {
            return {
                ...previousState,
                About: "關於",
                Events: "活動",
                Contacts: "聯繫",
                Donations: "捐獻"
            }
        })
    }

    const clickSC = () => {
        setLang(previousState => {
            return {
                ...previousState,
                About: "关于",
                Events: "活动",
                Contacts: "联系",
                Donations: "捐献"
            }
        })
    }

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
                 
                <Link to={"/about"}> <div className='about'> {lang.About} </div> </Link>
                <Link to={"/events"}> <div className='events'> {lang.Events} </div> </Link>
                <Link to={"contacts"}> <div className='contacts'> {lang.Contacts} </div> </Link>
                <Link to={"/donations"}> <div className='donations'> {lang.Donations} </div> </Link>
            </div>
            <div className='language'>
                <button className='eng' onClick={clickEng}> English </button> <br />
                <button className='TC' onClick={clickTC}> 繁體中文 </button> <br />
                <button className='SC' onClick={clickSC}> 简体中文 </button>
            </div>
        </div>
    )
}

