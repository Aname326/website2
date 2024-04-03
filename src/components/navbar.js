import '../styles.css'
import Logo from '../assets/Hearts-Alight-Logo.png'

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className='Logo'>
                <img src={Logo} /> 
            </div>
            <div className='rightSide'></div>
        </div>
        
    )
}

