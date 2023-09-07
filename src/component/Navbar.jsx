import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import style from '../style/Navbar.module.css';
import logoImg from '../images/logo-1.jpg';
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className= {style.navbar} id = "navbar">
      <div className= {`${style["navbar-content"]} container flex`}>
        <div className= {`${style["brand-and-toggler"]} flex flex-sb`}>
          <Link to = "/" className= {`${style["navbar-brand"]} flex`}>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
          </Link>
          <button type = "button" className={`${style["navbar-toggler-btn"]}`} onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? `${style["navbar-collapse"]} ${style["show-navbar-collapse"]}` : `${style["navbar-collapse"]}`}>
          <ul className = {`${style["navbar-nav"]}`}>
            <li className={`${style["nav-item"]}`}>
              <Link to = "book" className={`${style["nav-link"]} nav-link text-uppercase text-white fs-22 fw-6 ls-1`}>Home</Link>
            </li>
            <li className={`${style["nav-item"]}`}>
              <Link to = "about" className= {`${style["nav-link"]} text-uppercase text-white fs-22 fw-6 ls-1`}>about</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar