import '../styles.css';

// photos of leaders
import Ada from '../assets/AdaWong.jpg';
import Marble from '../assets/MarbleMa.jpg';
import Teresa from '../assets/TeresaLing.jpg';
import Erica from '../assets/EricaTing.jpg';

export default function Contacts() {
    return (
        <div className='ContactsPg'>
            <h1> Introducting the Leaders of Hearts Alight</h1>

            <br /><br />
            <h1>Youth Formators</h1>
            <br />
            <div className='Formators'>
                <div className='Ada'>
                    <img src={Ada} /> 
                    <h2>Ada Wong</h2>
                    <p> Cantonese / Mandarin </p>
                </div>

                <div>
                    <img src={Marble} />
                    <h2> Marble Ma </h2>
                    <p> Cantonese / Mandarin </p>
                </div>

                <div>
                    <img src={Teresa} />
                    <h2> Teresa Ling </h2>
                    <p> Mandarin </p>
                </div>
            </div>

            <br /><br /><br />

            <h1>Youth Ministers</h1>
            <br />
            <div className='Ministers'>
                <div>
                    <img src={Erica} />
                    <h2> Erica Ting</h2>
                    <p> Mandarin </p>
                </div>

            </div>
            
        </div>
    )
}