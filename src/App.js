import React  from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Header';
import './App.scss';
import ProductsListPage from './pages/ProductsListPage';

function App() {
  return (
    <Router>
      <Header />
      <div id='page-body'>
      <Routes>
           
            <Route path="/:categoryname" element={<ProductsListPage />} exact />
            
      </Routes>
      </div>
  </Router>
  );
}

export default App;
