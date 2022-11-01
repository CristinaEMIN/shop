import React  from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Header';
import './App.scss';

function App() {
  return (
    <Router>
    <Header />
    <div id='page-body'>
      <Routes>
        
      </Routes>
      </div>
  </Router>
  );
}

export default App;
