import '../styles.css';
import JulyEng from '../assets/JulyEnglish.png';
import JulyChin from '../assets/JulyChinese.png';
import { useState } from 'react';

export default function Events() {

    const [showJuly, setShowJuly] = useState(false)

    const ShowPosterJuly = () => {
        if (showJuly == true) {
            setShowJuly(false)
        } else {
            setShowJuly(true)
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
            <button className='JulyBtn' onClick={ShowPosterJuly}> July </button> <br /> <br />
            <p> {showJuly && <img src={JulyEng} />} </p>
            <p> {showJuly && <img src={JulyChin} />} </p>
        
            <button> June </button> <br /> <br />
        </div>
    )
}