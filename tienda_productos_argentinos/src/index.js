import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from '../src/Pages/Home/Home.js';
import PageProducts from './Pages/PageProducts/PageProducts.js';
import Admin from './Pages/Admin/Admin.js';
import NewProduct from './Pages/NewProduct/NewProduct.js';

import{BrowserRouter as Router, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<PageProducts/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/newProduct' element={<NewProduct/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals