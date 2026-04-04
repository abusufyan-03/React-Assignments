import React from "react";
import ReactDOM from 'react-dom/client';
const logo = new URL('../assets/logo.png', import.meta.url);
const Header = () => {
    return(
        <header>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>     
        </header>
    )
}

export default Header;