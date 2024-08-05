import '../styles.css';
import { useState, useRef } from 'react';
import Navbar from '../components/navbar';
import { useStateContext } from '../components/language';
import { firestore } from '../components/firebase';
import { addDoc, collection } from "@firebase/firestore";
import { auth, googleProvider } from "../components/firebase";
import { signOut, signInWithPopup } from "firebase/auth";

// import posters
import AprEng2024 from '../assets/AprilEnglish.png';
import AprChin2024 from '../assets/AprilChinese.png';
import MarEng2024 from '../assets/MarchEnglish.png';
import MarChin2024 from '../assets/MarchChinese.png';
import FebEng2024 from '../assets/FebruaryEnglish.png';
import FebChin2024 from '../assets/FebruaryChinese.png';
import JanEng2024 from '../assets/JanuaryEnglish.png';
import JanChin2024 from '../assets/JanuaryChinese.png';
import DecEng2023 from '../assets/DecemberEnglish.png';
import DecChin2023 from '../assets/DecemberChinese.png';
import NovEng2023 from '../assets/NovemberEnglish.png';
import NovChin2023 from '../assets/NovemberChinese.png';
import OctEng2023 from '../assets/OctoberEnglish.png';
import OctChin2023 from '../assets/OctoberChinese.png';
import SepEng2023 from '../assets/SeptemberEnglish.png';
import SepChin2023 from '../assets/SeptemberChinese.png';
import AugEng2023 from '../assets/AugustEnglish.png';
import AugChin2023 from '../assets/AugustChinese.png';
import JulEng2023 from '../assets/JulyEnglish.png';
import JulChin2023 from '../assets/JulyChinese.png';
import JunEng2023 from '../assets/JuneEnglish.png';
import JunChin2023 from '../assets/JuneChinese.png';

export default function Events() {

    // Firebase
    console.log(auth?.currentUser?.email);

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider)
            setShowForm(true)
            setShowSignInBtn(false)
            setShowLogOutBtn(true)
        } catch(err){
            console.error(err)
        }    
    };

    const logout = async () => {
        try{
            await signOut(auth)
            setShowForm(false)
            setShowSignInBtn(true)
            setShowLogOutBtn(false)
        } catch(err) {
            console.error(err)
        }
        
    };

    const [showForm, setShowForm] = useState(false)
    const [showSignInBtn, setShowSignInBtn] = useState(true)
    const [showLogOutBtn, setShowLogOutBtn] = useState(false)

    const regName = useRef();
    const numAdult = useRef();
    const numChildren = useRef();

    const ref = collection(firestore, "DinnerReg18-05-2024");

    const handleSave = async(e) => {
        e.preventDefault();
    }

    let data = {
        name: regName.value, 
        numAdult: numAdult.value,
        numChildren: numChildren.value
    }

    try {
        addDoc(ref, data);
    } catch(e) {
        console.log(e)
    }

    //language switching

    const { lang } = useStateContext()

    const [showMonthlyPosters, setShowMonthlyPosters] = useState(false)

    const ShowMonthlyPosters = () => {
        if (showMonthlyPosters == true) {
            setShowMonthlyPosters(false)
        } else {
            setShowMonthlyPosters(true)
        }
    }

    //toggle show and hide buttons for monthly posters 

    const [showApr2024, setShowApr2024] = useState(false)

    const ShowPosterApr2024 = () => {
        if (showApr2024 == true) {
            setShowApr2024(false)
        } else {
            setShowApr2024(true)
        }
    }

    const [showMar2024, setShowMar2024] = useState(false)

    const ShowPosterMar2024 = () => {
        if (showMar2024 == true) {
            setShowMar2024(false)
        } else {
            setShowMar2024(true)
        }
    }

    const [showFeb2024, setShowFeb2024] = useState(false)

    const ShowPosterFeb2024 = () => {
        if (showFeb2024 == true) {
            setShowFeb2024(false)
        } else {
            setShowFeb2024(true)
        }
    }

    const [showJan2024, setShowJan2024] = useState(false)

    const ShowPosterJan2024 = () => {
        if (showJan2024 == true) {
            setShowJan2024(false)
        } else {
            setShowJan2024(true)
        }
    }

    const [showDec2023, setShowDec2023] = useState(false)

    const ShowPosterDec2023 = () => {
        if (showDec2023 == true) {
            setShowDec2023(false)
        } else {
            setShowDec2023(true)
        }
    }

    const [showNov2023, setShowNov2023] = useState(false)

    const ShowPosterNov2023 = () => {
        if (showNov2023 == true) {
            setShowNov2023(false)
        } else {
            setShowNov2023(true)
        }
    }

    const [showOct2023, setShowOct2023] = useState(false)

    const ShowPosterOct2023 = () => {
        if (showOct2023 == true) {
            setShowOct2023(false)
        } else {
            setShowOct2023(true)
        }
    }

    const [showSep2023, setShowSep2023] = useState(false)

    const ShowPosterSep2023 = () => {
        if (showSep2023 == true) {
            setShowSep2023(false)
        } else {
            setShowSep2023(true)
        }
    }

    const [showAug2023, setShowAug2023] = useState(false)

    const ShowPosterAug2023 = () => {
        if (showAug2023 == true) {
            setShowAug2023(false)
        } else {
            setShowAug2023(true)
        }
    }
 
    const [showJul2023, setShowJul2023] = useState(false)

    const ShowPosterJul2023 = () => {
        if (showJul2023 == true) {
            setShowJul2023(false)
        } else {
            setShowJul2023(true)
        }
    }

    const [showJun2023, setShowJun2023] = useState(false)

    const ShowPosterJun2023 = () => {
        if (showJun2023 == true) {
            setShowJun2023(false)
        } else {
            setShowJun2023(true)
        }
    }

    return (
        <div className='EventsPg'>
            <div>
                <button className='EventsRegBtn'> {lang.EventsReg} {'>>'}</button> 

                <div className='EventsReg'>
                    <p> Date for Upcoming Dinner: 18/05/2024 </p>

                    {showSignInBtn &&(
                        <button onClick={signInWithGoogle} className='subBtn'> Sign In With Google </button>
                    )}
                    {showLogOutBtn &&
                        <button className='subBtn' onClick={logout}> Logout </button>
                    }

                    {showForm && (
                        <form onSubmit={handleSave}>
                            
                            <h2>{lang.RegName}</h2>
                            <input ref={regName} />

                            <br /><br />

                            <h3> {lang.Adult} </h3>
                            <input type="number" ref={numAdult} />

                            <h3> {lang.Children} </h3>
                            <input type="number" ref={numChildren} />

                            <h4> {lang.Dietary} </h4>
                            <textarea />

                            <br /><br /><br />

                            <button type='submit' className='subBtn'> {lang.Submit} </button>
                        </form>
                    )}
                </div>
            </div>
            <div>
                <button className='EventsPostersBtn' onClick={ShowMonthlyPosters}> {lang.EventsPoster}  {'>>'}</button>
            </div>
            <div>
                {showMonthlyPosters && 'hii' &&
                    <div className='EventsPoster'>
                        

                        <h1> {lang.EventsPoster} </h1> <br />
                        2024 <br /> <br />

                        <button onClick={ShowPosterApr2024}> {lang.April} </button> <br /> <br />
                        <p> {showApr2024 && <img src={AprEng2024} />} </p>
                        <p> {showApr2024 && <img src={AprChin2024} />} </p>
                        
                        <button onClick={ShowPosterMar2024}> {lang.March} </button> <br /> <br />
                        <p> {showMar2024 && <img src={MarEng2024} />} </p>
                        <p> {showMar2024 && <img src={MarChin2024} />} </p>

                        <button onClick={ShowPosterFeb2024}> {lang.February} </button> <br /> <br />
                        <p> {showFeb2024 && <img src={FebEng2024} />} </p>
                        <p> {showFeb2024 && <img src={FebChin2024} />} </p>

                        <button onClick={ShowPosterJan2024}> {lang.January} </button> <br /> <br />
                        <p> {showJan2024 && <img src={JanEng2024} />} </p>
                        <p> {showJan2024 && <img src={JanChin2024} />} </p>

                        2023 <br /> <br />

                        <button onClick={ShowPosterDec2023}> {lang.December} </button> <br /> <br />
                        <p> {showDec2023 && <img src={DecEng2023} />} </p>
                        <p> {showDec2023 && <img src={DecChin2023} />} </p>

                        <button onClick={ShowPosterNov2023}> {lang.November} </button> <br /> <br />
                        <p> {showNov2023 && <img src={NovEng2023} />} </p>
                        <p> {showNov2023 && <img src={NovChin2023} />} </p>

                        <button onClick={ShowPosterOct2023}> {lang.October} </button> <br /> <br />
                        <p> {showOct2023 && <img src={OctEng2023} />} </p>
                        <p> {showOct2023 && <img src={OctChin2023} />} </p>

                        <button onClick={ShowPosterSep2023}> {lang.September} </button> <br /> <br />
                        <p> {showSep2023 && <img src={SepEng2023} />} </p>
                        <p> {showSep2023 && <img src={SepChin2023} />} </p>

                        <button onClick={ShowPosterAug2023}> {lang.August} </button> <br /> <br />
                        <p> {showAug2023 && <img src={AugEng2023} />} </p>
                        <p> {showAug2023 && <img src={AugChin2023} />} </p>

                        <button onClick={ShowPosterJul2023}> {lang.July} </button> <br /> <br />
                        <p> {showJul2023 && <img src={JulEng2023} />} </p>
                        <p> {showJul2023 && <img src={JulChin2023} />} </p>
                    
                        <button onClick={ShowPosterJun2023}> {lang.June} </button> <br /> <br />
                        <p> {showJun2023 && <img src={JunEng2023} />} </p>
                        <p> {showJun2023 && <img src={JunChin2023} />} </p>
                    </div>
                }
            </div>
        </div>
    )
}