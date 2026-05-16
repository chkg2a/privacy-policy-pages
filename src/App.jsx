import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TungjalloPrivacy from './TungjalloPrivacy';

// Simple Home page component
const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
    <h1>Welcome to My Apps Website</h1>
    <p>Looking for our legal documentation?</p>
    <Link to="/tungjallo" style={{ color: '#3498db', fontWeight: 'bold' }}>
      View Tungjallo Privacy Policy
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Website Root */}
        <Route path="/" element={<Home />} />

        {/* Specific Path URL for your App Privacy Policy */}
        <Route path="/tungjallo" element={<TungjalloPrivacy />} />
      </Routes>
    </Router>
  );
}

export default App;
