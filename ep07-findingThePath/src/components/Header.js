import React from 'react';
import ReactDOM from 'react-dom/client';
const logo = new URL('../assets/logo.png', import.meta.url);
import { useState } from 'react';
import '../style.css';
import '../responsiveness.css'
const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [login, setLogin] = useState('login');
    console.log("Header componenent rendered!!")
    return(
        <header className="header">
            <div className="logo-container">
                <img id='logo' src={logo} alt="logo"/>
            </div>
            <button type='button' className='toggle-menu' onClick={()=> setOpenMenu(true)}>☰</button>
            {openMenu && (<div className={`overlay ${openMenu? 'active': ""}`}></div>)}

            <div className={`mobile-menu ${openMenu? 'active': ""}`}>
                <div className='menu-header'>
                    <h2>Menu</h2>
                    <button onClick={()=> setOpenMenu(false)}>X</button>
                </div>
                <nav className='menu-nav'>
                        <ul>
                            <a href="">
                                <li>Home</li>
                            </a>
                            <a href="">
                                <li>About</li>
                            </a>
                            <a href="">
                                <li>Contact</li>
                            </a>
                            <a href="">
                                <li>Cart</li>
                            </a>
                        </ul>
                    </nav>
                    <div className='menu-footer'>
                        <button className='login-btn btn'>Login</button>
                        <button className='signin-btn btn'>Signin</button>
                    </div>
            </div>

            <div className='nav-container'>
                <ul className='nav-items'>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className='nav-buttons'>
                <button className='login-btn btn'
                onClick={()=>{
                    login === 'login'? setLogin('logout'): setLogin('login')
                }}
                >{login}</button>
                {/* <button className='signin-btn btn'>Signin</button> */}
            </div>
        </header>
    )
}

export default Header;