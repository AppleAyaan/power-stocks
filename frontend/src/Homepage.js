import React from 'react';
import Header from './Header'; 
import Login from './Login'; 
import './Homepage.css'; 

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="login-section">
        <Login />
      </div>
    </div>
  );
};

export default Homepage;
