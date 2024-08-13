/* logic made from Chat GPT in order to understand HTML5 validation messges */

import logo from '../assets/logo.png'; 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  {/* TAB BAR TITLE DONE HERE (copy and paste as needed) */}
  useEffect(() => {
    document.title = 'Sign Into Power Stocks'; 
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Validate email and password
    if (!email || !password) {
      setError('Please fill in all fields.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center -mt-16">
      {/* TITLE SECTION HERE */}
      <div className="text-center mb-10">
        <img src={logo} alt="Logo" className="mx-auto mb-2 w-1/3 h-auto" />
        <p className="text-8xl font-semibold bg-gradient-to-r from-green-400 to-red-300 bg-clip-text text-transparent font-custom">
          POWER STOCKS
        </p>
      </div>
      
      
      {/* TEXT SECTION HERE */}
      <div className="text-center mb-5">
        <p className="text-xl font-semibold text-gray-300">
          Welcome back! Please sign in to continue.
        </p>
      </div>
      
      {/* SIGN IN WINDOW HERE*/}
      <div className="w-full max-w-md p-6 bg-neutral-800 text-white rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
            Sign In Here
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 p-2 bg-red-600 text-red-200 rounded">
              {error}
            </div>
          )}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              id="Email"
              placeholder="Email"
              className="w-full p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-neutral-700 text-white focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-700 hover:bg-green-800 rounded-md text-white font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};


export default SignIn;
