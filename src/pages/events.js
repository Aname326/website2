import '../styles.css';
import JulyEng from '../assets/JulyEnglish.png';
import JulyChin from '../assets/JulyChinese.png';

export default function Events() {
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
            <button className='JulyBtn'> July </button> <br /> <br />
            <img src={JulyEng} className="JulyEng" /> 
            <img src={JulyChin} className='JulyChin' /> <br /> <br />

            <button> June </button> <br /> <br />
        </div>
    )
}