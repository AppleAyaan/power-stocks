import logo from '../assets/logo.png';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const username = event.target.username.value;
      const age = event.target.age.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const confirmPassword = event.target.confirmPassword.value;
  
      // Validate input
      if (!firstName || !lastName || !username || !age || !email || !password || !confirmPassword) {
        setError('Please fill in all fields.');
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
      } else if (password !== confirmPassword) {
        setError('Passwords do not match.');
      } else {
        setError('');
        // Handle successful account creation here
        navigate('/dashboard');
      }
    };

  return (
    <div className="flex flex-col items-center -mt-16">
      {/* TITLE SECTION WITH LOGO AND TEXT */}
      <div className="flex items-center mb-10">
        <img src={logo} alt="Logo" className="w-20 h-auto mr-4" />
        <p className="text-6xl font-semibold bg-gradient-to-r from-green-400 to-red-300 bg-clip-text text-transparent font-custom">
          POWER STOCKS
        </p>
      </div>

        {/* TEXT SECTION HERE */}
      <div className="text-center mb-5">
        <p className="text-xl font-semibold text-gray-300">
          Create your account to get started!
        </p>
      </div>

        {/* SIGN UP FORM HERE */}
      <div className="w-full max-w-md p-6 bg-neutral-800 text-white rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
            Create An Account
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 p-2 bg-red-600 text-red-200 rounded">
              {error}
            </div>
          )}
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <select
                name="age"
                className="w-full p-3 rounded bg-neutral-700 text-white focus:outline-none"
                required
            >
                <option value="" disabled selected>
                Age
                </option>
                {[...Array(91).keys()].map(age => (
                <option key={age + 10} value={age + 10}>
                    {age + 10}
                </option>
                ))}
            </select>
            </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-700 hover:bg-green-800 rounded-md text-white font-semibold"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;