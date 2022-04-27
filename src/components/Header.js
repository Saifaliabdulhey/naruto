import React from 'react'
// import discord from '../images/discord.png'
// import telegram from '../images/telegram.png'
// import instagram from '../images/instagram.png'
import card from '../images/card.svg'
import logo from '../images/logo.svg'
import { Link, useLocation } from 'react-router-dom'
function Header() {
    const location = useLocation();
    const { pathname } = location;
    const splitlocation = pathname.split('/')
    return (
        <header>
            <div className="content-container">
                <div className="header">
                    <div className="logo">
                    <img className="logo-img" src={logo}/>
                    </div>
                    <div className="links">
                        <Link to="/" className={splitlocation[1] === "" ? "active" : "link"}> <p> Home </p></Link>
                        <Link to="/projects" className={splitlocation[1] === "projects" ? "active" : "link"}> <p> All </p></Link>
                        <Link to="/contact" className={splitlocation[1] === "contact" ? "active" : "link"}><p> New </p></Link>
                        <Link to="/contact" className={splitlocation[1] === "contact" ? "active" : "link"}><p> Used </p></Link>
                        <Link to="/contact" className={splitlocation[1] === "contact" ? "active" : "link"}><p> Sale </p></Link>
                        <Link to="/contact" className={splitlocation[1] === "contact" ? "active" : "link"}><p> Product </p></Link>
                        <Link to="/contact" className={splitlocation[1] === "contact" ? "active" : "link"}><p> Team </p></Link>
                    </div>
                    <div className="social-media">
                        <img className="social-1" src={card}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header