import '../styles.css';
import { useStateContext } from './language';

export default function Footnote() {

    const { lang } = useStateContext()

    const adminID = 'hayg@accc.org.nz'
    const adminPW = 'hayg1225'

    return (
        <div className='Footnote'>
            <div className='Text'>
                <a href='https://www.instagram.com/heartsalightaccc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                    {lang.Instagram}: @heartsalightaccc 
                </a>
                <br /><br />
                <a href='https://www.facebook.com/acccnz'>
                    {lang.Facebook}: @accc
                </a>
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