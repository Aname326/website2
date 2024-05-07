import '../styles.css';
import photo from '../assets/2023CampPhoto.jpg';

export default function Login() {
    return (
        <div className='Login'>
            <img src={photo} />
            <div className='Block'>
                <h1>
                    Admin Login
                </h1>
                <p> ID: </p>
                <input></input> <br />
                <p> Password: </p>
                <input></input> <br />
                <button className='LoginBtn'> Login </button>
            </div>
        </div>
    )
}