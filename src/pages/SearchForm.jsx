import React, { useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { useGlobalContext } from '../context';

import {FaSearch} from "react-icons/fa";
import css from '../style/SearchForm.module.css';

const SearchForm = () => {

    const {setSearchTerm, setResultTitle} = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();
  
    useEffect(() => searchText.current.focus(), []);
    const handleSubmit = (e) => {
      e.preventDefault();
      let tempSearchTerm = searchText.current.value.trim();
      if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
        setSearchTerm("Enter Book name to find...");
        setResultTitle("Please Enter Something ...");
      } else {
        setSearchTerm(searchText.current.value);
      }
  
      navigate("/book");
    };

  return (
    <>
        <div className={`${css["search-form"]}`}>
            <div className='container'>
                <div className='search-form-content'>
                <form className={`${css["search-form"]}`} onSubmit={handleSubmit}>
                    <div className= {`${css["search-form-elem"]} flex flex-sb bg-white`}>
                    <input type = "text" className={`${css["form-control"]}`} placeholder='Enter Book name to find...' ref = {searchText} />
                    <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
                        <FaSearch className='text-purple' size = {32} />
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchForm