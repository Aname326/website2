import '../styles.css';
import { useState } from 'react';
import Navbar from '../components/navbar';

import JulyEng2023 from '../assets/JulyEnglish.png';
import JulyChin2023 from '../assets/JulyChinese.png';
import JuneEng2023 from '../assets/JuneEnglish.png';
import JuneChin2023 from '../assets/JuneChinese.png';

export default function Events() {

    const [showJuly2023, setShowJuly2023] = useState(false)

    const ShowPosterJuly2023 = () => {
        if (showJuly2023 == true) {
            setShowJuly2023(false)
        } else {
            setShowJuly2023(true)
        }
    }

    const [showJune2023, setShowJune2023] = useState(false)

    const ShowPosterJune2023 = () => {
        if (showJune2023 == true) {
            setShowJune2023(false)
        } else {
            setShowJune2023(true)
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
            <button onClick={ShowPosterJuly2023}> July </button> <br /> <br />
            <p> {showJuly2023 && <img src={JulyEng2023} />} </p>
            <p> {showJuly2023 && <img src={JulyChin2023} />} </p>
        
            <button onClick={ShowPosterJune2023}> June </button> <br /> <br />
            <p> {showJune2023 && <img src={JuneEng2023} />} </p>
            <p> {showJune2023 && <img src={JuneChin2023} />} </p>
        </div>
    )
}