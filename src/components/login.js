import '../styles.css';
import photo from '../assets/2023CampPhoto.jpg';
import { useStateContext } from './language';

export default function Login() {

    const { lang } = useStateContext()

    return (
        <div className='Login'>
            <img src={photo} />
            <div className='Block'>
                <h1>
                    {lang.AdminLogin}
                </h1>
                <p> ID: </p>
                <input></input> <br />
                <p> {lang.Password} {':'} </p>
                <input></input> <br />
                <button> {lang.Login} </button>
            </div>
        </div>
    )
}