import '../styles.css';
import Logo from '../assets/Hearts-Alight-Logo.png';
import {Link} from 'react-router-dom';
import { useStateContext } from './language';

export default function Navbar() {

    const { lang, clickEng, clickTC, clickSC } = useStateContext()

    //const [lang, setLang] = useState({
    //    HA: "Hearts Alight",
    //    About: "About",
    //    Events: "Events",
    //    Contacts: "Contacts",
    //    Donations: "Donations",
    //    April: "April"
    //}); 

    //const clickEng = () => {
    //    setLang(previousState => {
    //        return {
    //            ...previousState,
    //            HA: "Hearts Alight",
    //            About: "About",
    //            Events: "Events",
    //            Contacts: "Contacts",
    //            Donations: "Donations",
    //            April: "April"
    //        }
    //    })
    //}

    //const clickTC = () => {
    //    setLang(previousState => {
    //        return {
    //            ...previousState,
    //            HA: "心燃青年團",
    //            About: "關於",
    //            Events: "活動",
    //            Contacts: "聯繫",
    //            Donations: "捐獻",
    //            April: "四月"
    //        }
    //    })
    //}

    //const clickSC = () => {
    //    setLang(previousState => {
    //        return {
    //            ...previousState,
    //            HA: "心燃青年团",
    //            About: "关于",
    //            Events: "活动",
    //            Contacts: "联系",
    //            Donations: "捐献",
    //            April: "四月"
    //        }
    //    })
    //}

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