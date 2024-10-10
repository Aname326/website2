import '../styles.css';
import { useEffect, useState } from 'react';
import { storage } from "../components/firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { useLoginContext } from "../components/login"

import SaltLight from '../assets/salt&light.png';

export default function Home() {

    const { loggedIn } = useLoginContext()

    // uploading files 

    const [posterUpload, setPosterUpload] = useState(null)
    const [latestChinPoster, setLatestChinPoster] = useState()
    const [latestEngPoster, setLatestEngPoster] = useState()

    const fetchLatestPoster = async () => {
        const folderEngRef = ref(storage, `EventsPoster/English/`);
        const folderChinRef = ref(storage, `EventsPoster/Chinese/`);
        try {
            const resEng = await listAll(folderEngRef); // Get all files in the English folder
            const resChin = await listAll(folderChinRef); // Get all files in the Chinese folder
            if (resEng.items.length > 0) {
                const latestEngFile = resEng.items[resEng.items.length - 1]; // Get the latest file
                const latestEngFileUrl = await getDownloadURL(latestEngFile); // Fetch its URL
                setLatestEngPoster(latestEngFileUrl); // Set the URL in the state
            }
            if (resChin.items.length > 0) {
                const latestChinFile = resChin.items[resChin.items.length - 1]; // Get the latest file
                const latestChinFileUrl = await getDownloadURL(latestChinFile); // Fetch its URL
                setLatestChinPoster(latestChinFileUrl); // Set the URL in the state
            }
        } catch (err) {
            console.error('Error fetching latest poster:', err);
        }
    }

    useEffect(() => {
        fetchLatestPoster();
      }, [] ) 

    const uploadEnglishPoster = async () => {
        if (!posterUpload) return;
        const posterFolderRef = ref(storage, `EventsPoster/English/${posterUpload.name}`)
        try {
          await uploadBytes(posterFolderRef, posterUpload);
          alert('uploaded successfully')
          fetchLatestPoster();
        } catch(err) {
          console.error(err)
        }
      }

    const uploadChinesePoster = async () => {
        if (!posterUpload) return;
        const posterFolderRef = ref(storage, `EventsPoster/Chinese/${posterUpload.name}`)
        try {
          await uploadBytes(posterFolderRef, posterUpload);
          alert('uploaded successfully')
          fetchLatestPoster();
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
                <img src={latestEngPoster} /> 
                {loggedIn.AdminShow && (
                    <div className='Upload'>
                        <h3>English Monthly Poster Upload</h3>
                        <input type="file" accept='image/jpg, image/png, image/jpeg' onChange={(e) => setPosterUpload(e.target.files[0])} />
                        <button onClick={uploadEnglishPoster} > Replace </button>
                    </div>
                )}
                <br />
                <img src={latestChinPoster} />
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