import '../styles.css';
import { useStateContext } from './language';

//from react-slideshow-image
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image';

//photos
import photo from '../assets/2023CampPhoto.jpg';

export default function Login() {

    const { lang } = useStateContext()

    return (
        <div className='Photo'>
            <img src={photo} />
        </div>
    )
}