import '../styles.css';
import { useStateContext } from './language';
import { useState, createContext, useContext } from 'react';

const LoginContext = createContext();

export default function Footnote({children}) {

    const { lang } = useStateContext()

    const adminID = 'hayg@accc.org.nz'
    const adminPW = 'hayg1225'

    const [adminIdInput, setAdminIdInput] = useState('')
    const [adminPwInput, setAdminPwInput] = useState('')

    const [loggedIn, setLoggedIn] = useState(false)

    const adminCheck = (e) => {
        e.preventDefault();

        if (adminIdInput == adminID && adminPwInput == adminPW) {
            setLoggedIn(true)
        } else {
            alert('wrong ID or password')
            setLoggedIn(false)
        }
        
    }

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
                <form onSubmit={adminCheck}>
                    <h1> {lang.AdminLogin} </h1>
                    <p> ID: </p>
                    <input value={adminIdInput} onChange={(e) => setAdminIdInput(e.target.value)} ></input> <br />
                    <p> {lang.Password}: </p>
                    <input value={adminPwInput} onChange={(e) => setAdminPwInput(e.target.value)} type="password" ></input> <br />
                    <button> {lang.Login} </button>
                </form>
                
            </div>

            <LoginContext.Provider value={{ loggedIn }} > {children} </LoginContext.Provider>
        </div>
    )
}