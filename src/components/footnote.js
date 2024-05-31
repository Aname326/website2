import '../styles.css';
import { useStateContext } from './language';

export default function Footnote() {

    const { lang } = useStateContext()

    return (
        <div className='Footnote'>
            <div className='Text'>
                哀居 Instagram: @heartsalightaccc
                <br />
                臉書 Facebook: @accc
            </div>
            <div className='Login'>
                <h1> {lang.AdminLogin} </h1>
                <p> ID: </p>
                <input></input> <br />
                <p> {lang.Password}: </p>
                <input></input> <br />
                <button> {lang.Login} </button>
            </div>
        </div>
    )
}