import React  from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import NavBar from './NarBar';
import './App.css';

function App() {
  return (
    <Router>
    <NavBar />
    <div id='page-body'>
      <Routes>
       
  
          
      </Routes>
      </div>
  </Router>
  );
}

export default App;
