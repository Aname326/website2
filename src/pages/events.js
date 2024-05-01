import '../styles.css';
import { useState } from 'react';
import Navbar from '../components/navbar';

import JulyEng2023 from '../assets/JulyEnglish.png';
import JulyChin2023 from '../assets/JulyChinese.png';
import JuneEng2023 from '../assets/JuneEnglish.png';
import JuneChin2023 from '../assets/JuneChinese.png';

export default function Events() {

    const [showJuly, setShowJuly] = useState(false)

    const ShowPosterJuly = () => {
        if (showJuly == true) {
            setShowJuly(false)
        } else {
            setShowJuly(true)
        }
    }

    const [showJune, setShowJune] = useState(false)

    const ShowPosterJune = () => {
        if (showJune == true) {
            setShowJune(false)
        } else {
            setShowJune(true)
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
            <button> August </button> <br /> <br />
            <button onClick={ShowPosterJuly}> July </button> <br /> <br />
            <p> {showJuly && <img src={JulyEng2023} />} </p>
            <p> {showJuly && <img src={JulyChin2023} />} </p>
        
            <button onClick={ShowPosterJune}> June </button> <br /> <br />
            <p> {showJune && <img src={JuneEng2023} />} </p>
            <p> {showJune && <img src={JuneChin2023} />} </p>
        </div>
    )
}