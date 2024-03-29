import React  from 'react';
import {BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom';
import Header from './Header';
import './App.scss';
import ProductsListPage from './pages/ProductsListPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <div id='page-body'>
      <Routes>
           
            <Route path="/:categoryname" element={<ProductsListPage />} exact />
            <Route path="/:categoryname/:productId" element={<ProductPage />} exact />
            <Route path="/cart" element={<CartPage />} exact />
            <Route path="/" element={<Navigate replace to="/all" />} />
            
      </Routes>
      </div>
  </Router>
  );
}

export default App;
