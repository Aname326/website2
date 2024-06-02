import '../styles.css';

import SaltLight from '../assets/salt&light.png';

import MayEng2024 from '../assets/MayEnglish.png';
import MayChin2024 from '../assets/MayChinese.png';

export default function Home() {
    return (
        <div className='HomePg'>
            <img className='SaltLight' src={SaltLight} />

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