import '../styles.css';
import { useStateContext } from './language';

//from react-slideshow-image
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';

//photos
import campPhoto from '../assets/2023CampPhoto.jpg';
import secPhoto from '../assets/2023FrChoiBdayPhoto.JPG';

const slideImages = [
    campPhoto,
    secPhoto
]

export default function Login() {

    const { lang } = useStateContext()

    return (
        <div className='Photo'>
            <Fade>
                {slideImages.map((image, index) => (
                    <div key={index} className='SlidePhoto' style={{ backgroundImage: `url(${image})` }}>

                    </div>
                ))}
            </Fade>
        </div>
    )
}