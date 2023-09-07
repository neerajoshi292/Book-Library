import React from 'react'
import { useGlobalContext } from '../context';
import Book from './Book';
import Loading from '../pages/Loader';
import coverImg from '../images/404_page_cover.jpg';

import css from '../style/BookList.module.css';

const BookList = () => {

  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <>
        <section className={css.booklist}>
            <div className='container'>
                <div className='section-title'>
                    <h2>{resultTitle}</h2>
                </div>
                <div className= {`${css["booklist-content"]} grid`}>
                {
                    booksWithCovers.slice(0, 30).map((item, index) => {
                    return (
                        <Book key = {index} {...item} />
                    )
                    })
                }
                </div>
            </div>
        </section>
    </>
  )
}

export default BookList