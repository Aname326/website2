import '../styles.css';
import { useState } from 'react';
import Navbar from '../components/navbar';

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
            <h1> Events Posters </h1> <br />
            2024 <br /> <br />
            <button> April </button> <br /> <br />
            
            <button> March </button> <br /> <br />
            <button> February </button> <br /> <br />
            <button onClick={ShowPosterJan2024}> January </button> <br /> <br />
            <p> {showJan2024 && <img src={JanEng2024} />} </p>
            <p> {showJan2024 && <img src={JanChin2024} />} </p>

            2023 <br /> <br />

            <button onClick={ShowPosterDec2023}> December </button> <br /> <br />
            <p> {showDec2023 && <img src={DecEng2023} />} </p>
            <p> {showDec2023 && <img src={DecChin2023} />} </p>

            <button onClick={ShowPosterNov2023}> November </button> <br /> <br />
            <p> {showNov2023 && <img src={NovEng2023} />} </p>
            <p> {showNov2023 && <img src={NovChin2023} />} </p>

            <button onClick={ShowPosterOct2023}> October </button> <br /> <br />
            <p> {showOct2023 && <img src={OctEng2023} />} </p>
            <p> {showOct2023 && <img src={OctChin2023} />} </p>

            <button onClick={ShowPosterSep2023}> September </button> <br /> <br />
            <p> {showSep2023 && <img src={SepEng2023} />} </p>
            <p> {showSep2023 && <img src={SepChin2023} />} </p>

            <button onClick={ShowPosterAug2023}> August </button> <br /> <br />
            <p> {showAug2023 && <img src={AugEng2023} />} </p>
            <p> {showAug2023 && <img src={AugChin2023} />} </p>

            <button onClick={ShowPosterJul2023}> July </button> <br /> <br />
            <p> {showJul2023 && <img src={JulEng2023} />} </p>
            <p> {showJul2023 && <img src={JulChin2023} />} </p>
        
            <button onClick={ShowPosterJun2023}> June </button> <br /> <br />
            <p> {showJun2023 && <img src={JunEng2023} />} </p>
            <p> {showJun2023 && <img src={JunChin2023} />} </p>
        </div>
    )
}