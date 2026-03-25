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

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <div className="media">
                <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1693357212/e683cfeb39647871ccdc4978222ccc1f.jpg" />
            </div>
            <div className="res-info">
                <h2 className="res-name">Meghna Food</h2>
                <p className="cuisine">Indian food, spicy food, south Indian</p>
                <p className="res-rating">4.5 start</p>
                <p className="res-price">5$ for Two</p>
                <p className="deliveryTime">16 minitute</p>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <main className="main">
            <section>
                <div className="search-container">
                    <input className="searchBar" type="search" placeholder="Search..." />
                    <button className="search-btn">Search</button>
                </div>
                <div className="Restaurant-container">
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />

                </div>
            </section>
        </main>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)