// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Pages/homepage';
import Services from './Pages/services'
import Account from './Pages/account';

// Placeholder components
const Placeholder = () => {
  return <div>This page is under construction.</div>;
};

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <div className="logo">Hot Carz</div>
          <nav className="nav">
            <Link to="/" className="button">Home</Link>
            <Link to="/cars" className="button">Cars</Link>
            <Link to="/services" className="button">Services</Link>
            <Link to="/account" className="button">Account</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cars" element={<Placeholder />} />
          <Route path="/services" element={<Services />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
