import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import styles from "../styles/navbar.module.css"
import monkeyLogoDark from "../assets/A-MONKEY-LIFE-BLANCO.png"
import monkeyLogoLight from "../assets/A-MONKEY-LIFE-NEGRO.png"

export const Navbar = () => {

    const { store, actions } = useContext(Context);

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        actions.changeTheme()
        //setMode(mode === 'light' ? 'dark' : 'light');
    };

    const logoSrc = store.theme === 'theme-light' ? monkeyLogoLight  : monkeyLogoDark;

    return (
        <nav className={` ${styles.navbar} navbar navbar-light border-bottom justify-content-center`}>
            <div className="container justify-content-between">
                <a href="/">
                    <img src={logoSrc} alt="monkeyLogo" style={{ width: "80px" }} />

                </a>
                
                

                <div className={`offcanvas offcanvas-start ${styles.offcanvas}`} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div className="offcanvas-header justify-content-end">
                        <i typeof="button" className={`fa-solid fa-xmark ${styles.buttonClose}`} data-bs-dismiss="offcanvas" aria-label="Close"></i>
                    </div>
                    <div className={`offcanvas-body ${styles.offcanvasBody}`}>
                        {/* <Link to="/" style={{ textDecoration: 'none' }}>
                            <p className={`navbar-brand mb-0 h1 ${styles.menuLink}`}>Profile</p>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <p className={`navbar-brand mb-0 h1 ${styles.menuLink}`}>Contacts</p>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <p className={`navbar-brand mb-0 h1 ${styles.menuLink}`}>Advanced Search</p>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <p className={`navbar-brand mb-0 h1 ${styles.menuLink}`}>Manage Tags</p>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <p className={`navbar-brand mb-0 h1 ${styles.menuLink}`}>About Us</p>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <p className={`navbar-brand mb-0 h1 ${styles.menuLink}`}>Log Out</p>
                        </Link> */}
                    </div>
                </div>
                {/* <Link to="/" style={{ textDecoration: 'none' }}>
                    <p className={`navbar-brand mb-0 h1 logo ${styles.title}`}>Personalia</p>
                </Link> */}
                <input className={styles.darkModeToggleInput} type="checkbox" onClick={toggleMode} id="darkmode-toggle" />
                <label className={styles.darkModeToggle} htmlFor="darkmode-toggle">
                    <i className={`fa-solid fa-sun ${styles.sun}`}></i>
                    <i className={`fa-solid fa-moon ${styles.moon}`}></i>
                </label>
            </div>
        </nav>

    )
}