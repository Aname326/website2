import '../styles.css';
import { useState } from 'react';
import { storage } from "../components/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useLoginContext } from "../components/login"

import SaltLight from '../assets/salt&light.png';

import MayEng2024 from '../assets/MayEnglish.png';
import MayChin2024 from '../assets/MayChinese.png';

export default function Home() {

    const { loggedIn } = useLoginContext()

    // uploading files 

    const [posterUpload, setPosterUpload] = useState(null)
    const [latestChinesePoster, setLatestChinesePoster] = useState()
    const [latestEnglishPoster, setLatestEnglishPoster] = useState()

    const uploadEnglishPoster = async () => {
        if (!posterUpload) return;
        const posterFolderRef = ref(storage, `EventsPoster/English/${posterUpload.name}`)
        try {
          await uploadBytes(posterFolderRef, posterUpload);
        } catch(err) {
          console.error(err)
        }
      }

    const uploadChinesePoster = async () => {
        if (!posterUpload) return;
        const posterFolderRef = ref(storage, `EventsPoster/Chinese/${posterUpload.name}`)
        try {
          await uploadBytes(posterFolderRef, posterUpload);
        } catch(err) {
          console.error(err)
        }
      }

    return (
        <div className='HomePg'>
            <img className='SaltLight' src={SaltLight} />

            <br />

            <p>
                Current Month Poster
            </p>

            <div className='Posters'>
                <img src={MayEng2024} /> 
                {loggedIn.AdminShow && (
                    <div className='Upload'>
                        <h3>English Monthly Poster Upload</h3>
                        <input type="file" accept='image/jpg, image/png, image/jpeg' onChange={(e) => setPosterUpload(e.target.files[0])} />
                        <button onClick={uploadEnglishPoster} > Replace </button>
                    </div>
                )}
                <br />
                <img src={MayChin2024} />
                {loggedIn.AdminShow && (
                    <div className='Upload'>
                        <h3>Chinese Monthly Poster Upload</h3>
                        <input type="file" accept='image/jpg, image/png, image/jpeg' onChange={(e) => setPosterUpload(e.target.files[0])} />
                        <button onClick={uploadChinesePoster} > Replace </button>
                    </div>
                )}
            </div>
        </div>
    )
}