import React from "react"
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import '../style.css';
import '../responsiveness.css';
const logo = new URL("../assets/logo.png", import.meta.url);
const Header = () => {
    const [openMenu, setMenuOpen] = useState(false);
    return(
        <header className="header">
            <div className="logo-container">
                <img id="logo" src={logo} />
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className="nav-buttons">
                <button className="login-btn">Login</button>
                <button className="signin-btn">Signin</button>
            </div>

            <button className="menu-toggle" onClick={()=> setMenuOpen(true)}>☰</button>
            {openMenu && (<div className={`overlay ${openMenu ? 'active' : ""}`} onClick={()=>setMenuOpen(false)}></div>)}

            <div className={`mobile-menu ${openMenu? 'active': ""}`}>
                <div className="menu-header">
                    <h2>Menu</h2>
                    <button onClick={()=>setMenuOpen(false)}>X</button>
                </div>
                <nav className="menu-nav">
                    <ul>
                        <a href="#">
                            <li>Home</li>
                        </a>
                        <a href="#">
                            <li>About</li>
                        </a>
                        <a href="#">
                            <li>Contact</li>
                        </a>
                        <a href="#">
                            <li>Cart</li>
                        </a>
                    </ul>
                </nav>
                <div className="menu-footer">
                    <button className="login-btn">Login</button>
                    <button className="signin-btn">Signin</button>
                </div>
            </div>

        </header>
    )
}

export default Header;