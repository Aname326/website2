import '../styles.css';
import Logo from '../assets/Hearts-Alight-Logo.png';
import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { useStateContext } from './language';
import Icon from '../assets/menuIcon.png'

export default function Navbar() {

    const { lang, clickEng, clickTC, clickSC } = useStateContext()

    const [currentPage, setCurrentPage] = useState({
        aboutBgColor: '#cd3f32',
        aboutColor: 'white',
        eventsBgColor: '#cd3f32',
        eventsColor: 'white',
        contactsBgColor: '#cd3f32',
        contactsColor: 'white',
        donationsBgColor: '#cd3f32',
        donationsColor: 'white'
    })

    const clickHome = () => {
        setCurrentPage({
            aboutBgColor: '#cd3f32',
            aboutColor: 'white',
            eventsBgColor: '#cd3f32',
            eventsColor: 'white',
            contactsBgColor: '#cd3f32',
            contactsColor: 'white',
            donationsBgColor: '#cd3f32',
            donationsColor: 'white'
        })
    }

    const clickAbout = () => {
        setCurrentPage({
            aboutBgColor: 'white',
            aboutColor: '#cd3f32',
            eventsBgColor: '#cd3f32',
            eventsColor: 'white',
            contactsBgColor: '#cd3f32',
            contactsColor: 'white',
            donationsBgColor: '#cd3f32',
            donationsColor: 'white'
        })
    }

    const clickEvents = () => {
        setCurrentPage({
            aboutBgColor: '#cd3f32',
            aboutColor: 'white',
            eventsBgColor: 'white',
            eventsColor: '#cd3f32',
            contactsBgColor: '#cd3f32',
            contactsColor: 'white',
            donationsBgColor: '#cd3f32',
            donationsColor: 'white'
        })
    }

    const clickContacts = () => {
        setCurrentPage({
            aboutBgColor: '#cd3f32',
            aboutColor: 'white',
            eventsBgColor: '#cd3f32',
            eventsColor: 'white',
            contactsBgColor: 'white',
            contactsColor: '#cd3f32',
            donationsBgColor: '#cd3f32',
            donationsColor: 'white'
        })
    }

    const clickDonations = () => {
        setCurrentPage({
            aboutBgColor: '#cd3f32',
            aboutColor: 'white',
            eventsBgColor: '#cd3f32',
            eventsColor: 'white',
            contactsBgColor: '#cd3f32',
            contactsColor: 'white',
            donationsBgColor: 'white',
            donationsColor: '#cd3f32'
        })
    }
    
    return (
        <div className='Navbar'>
                <div className='Logo'>
                    <Link to={"/"} onClick={clickHome}>
                        <img src={Logo} /> 
                    </Link>
                </div>
                <div className='HA'>
                    {lang.HA}
                </div>
                <div className='rightSide'>
                    {lang.About && <Link to={"/about"} onClick={clickAbout} style={{'background-color': currentPage.aboutBgColor, 'color': currentPage.aboutColor}}> <div className='about'> {lang.About} </div> </Link>}
                    {lang.Events && <Link to={"/events"} onClick={clickEvents} style={{'background-color': currentPage.eventsBgColor, 'color': currentPage.eventsColor}}> <div className='events'> {lang.Events} </div> </Link>}
                    {lang.Contacts && <Link to={"contacts"} onClick={clickContacts} style={{'background-color': currentPage.contactsBgColor, 'color': currentPage.contactsColor}}> <div className='contacts'> {lang.Contacts} </div> </Link>}
                    {lang.Donations && <Link to={"/donations"} onClick={clickDonations} style={{'background-color': currentPage.donationsBgColor, 'color': currentPage.donationsColor}}> <div className='donations'> {lang.Donations} </div> </Link>}
                </div>
                <div className='language'>
                    <button className='eng' onClick={clickEng}> Eng </button> 
                    <button className='TC' onClick={clickTC}> 繁 </button> 
                    <button className='SC' onClick={clickSC}> 简 </button>
                </div>
                <a className='MenuIcon'>
                    <img src={Icon} />
                </a>

        </div>
    )
}