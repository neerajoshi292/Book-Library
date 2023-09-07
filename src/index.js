import React from 'react';
import ReactDOM from 'react-dom/client';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';

import {AppProvider} from './context';
import './index.css';
import About from './pages/About';
import BookDetails from './pages/BookDetails';
import BookList from './pages/BookList';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />}>
            <Route path = "about" element = {<About />} />
            <Route path = "book" element = {<BookList />} />
            <Route path = "/book/:id" element = {<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </>
);