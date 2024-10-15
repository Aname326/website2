import '../styles.css';
import { useStateContext } from '../components/language';

import lightPhoto from '../assets/2024NewWineLightWhite.png';

export default function About() {
    const { lang, clickEng, clickTC, clickSC } = useStateContext()

    return (
        <div className='AboutPg' style={{ backgroundImage: `url(${lightPhoto})` }}>
            <div className='Text'>
                <h2>
                    {lang.Intro} 
                </h2>
                <i>
                    {lang.Introduction}
                </i>

                <h2>
                    {lang.Mission} 
                </h2>
                <i>
                {lang.MissionVerse}
                </i>

                <h2>
                    {lang.Vision} 
                </h2>
                <i>
                {lang.VisionVerse}
                </i>

                <h2>
                    {lang.CoreStatement}
                </h2>
                <i>
                {lang.CoreStatementVerse}
                </i>
            </div>
        </div>
    )
}