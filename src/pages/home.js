import '../styles.css';

import MayEng2024 from '../assets/MayEnglish.png';
import MayChin2024 from '../assets/MayChinese.png';

export default function Home() {
    return (
        <div className='HomePg'>
            <h1>
                " Salt of the Earth 
            </h1>
            <h1>
                Light of the World"
            </h1>

            <br />

            <p>
                Current Month Poster
            </p>

            <div className='Posters'>
                <img src={MayEng2024} /> 
                <br />
                <img src={MayChin2024} />
            </div>
        </div>
    )
}