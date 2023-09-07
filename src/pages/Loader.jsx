import React from 'react'
import LoaderImg from '../images/HI9M.gif';
import css from '../style/Loader.module.css';

const Loader = () => {
  return (
    <>
    <div className= {`${css.loader} flex flex-c`}>
        <img src = {LoaderImg} alt = "loader" />
    </div>
    </>
  )
}

export default Loader