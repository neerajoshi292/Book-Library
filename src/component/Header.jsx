import React from 'react';
import SearchForm from '../pages/SearchForm';
import Navbar from './Navbar';

import style from '../style/Header.module.css';

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className= {`${style["header-content"]} flex flex-c text-center text-white`}>
                <h2 className= {`${style["header-title"]} text-capitalize`}>find your book of choice.</h2><br />
                <p className= {`${style["header-text"]} fs-18 fw-3`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header