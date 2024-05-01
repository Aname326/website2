import '../styles.css';
import { useState } from 'react';
import Navbar from '../components/navbar';

import AugEng2023 from '../assets/AugustEnglish.png';
import AugChin2023 from '../assets/AugustChinese.png';
import JulEng2023 from '../assets/JulyEnglish.png';
import JulChin2023 from '../assets/JulyChinese.png';
import JunEng2023 from '../assets/JuneEnglish.png';
import JunChin2023 from '../assets/JuneChinese.png';

export default function Events() {

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
            <button> January </button> <br /> <br />
            2023 <br /> <br />
            <button> December </button> <br /> <br />
            <button> November </button> <br /> <br />
            <button> October </button> <br /> <br />
            <button> September </button> <br /> <br />
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