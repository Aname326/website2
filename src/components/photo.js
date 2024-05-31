import '../styles.css';
import photo from '../assets/2023CampPhoto.jpg';
import { useStateContext } from './language';

export default function Login() {

    const { lang } = useStateContext()

    return (
        <div className='Login'>
            <img src={photo} />
        </div>
    )
}