import React from "react";
import ReactDOM from 'react-dom/client';
const logo = new URL("./assets/logo.png", import.meta.url)
import './style.css'


const Header = () => {
    return (
        <React.Fragment>
            <header className="header">
                <div id="logo-container">
                    <img id="logo" src={logo} />
                </div>
                <nav className="navItemContainer">
                    <ul className="navItems">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About US</li>
                    <li>Cart</li>
                </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>)