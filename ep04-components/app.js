import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from "react";
const logo = new URL("./assets/logo.png", import.meta.url)
import './style.css'
import './responsive.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <React.Fragment>
            <header className="header">
                <div id="logo-container">
                    <img id="logo" src={logo} />
                </div>
                <nav className="nav-container">
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>About US</li>
                        <li>Contact US</li>
                        <li>Cart</li>
                    </ul>
                </nav>
                <div className="nav-buttons">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign Up</button>
                </div>
                <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
                    ☰
                </button>

                {menuOpen && (
                    <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>
                )}

                <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

                    <div className="menu-header">
                        <h2>Menu</h2>
                        <button onClick={() => setMenuOpen(false)}>✕</button>
                    </div>

                    <nav className="menu-nav">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="menu-footer">
                        <button className="login-btn">Login</button>
                        <button className="signup-btn">Sign Up</button>
                    </div>

                </div>



            </header>
        </React.Fragment>
    )
}


const AppLayout = () => {
    return (
        <>
            <Header />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)