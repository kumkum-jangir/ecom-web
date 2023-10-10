import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Header, Footer, Home, Fashion, About, Shop, Contact, Product, Practice, TestiMonials, CategoryProducts, LoadingSpinner,} from './components';
import Countinc from './components/Countinc';

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Practice" element={<Practice />} />
      <Route path="/Countinc" element={<Countinc />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/TestiMonials" element={<TestiMonials />} />
      <Route path="/CategoryProducts/:id" element={<CategoryProducts/>} />
      <Route path="/LoadingSpinner" element={<LoadingSpinner/>} />
    </Routes>
    <Footer />
  </Router>,




  document.getElementById("root")
);

