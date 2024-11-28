import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errorMessage: '',
  });

  const navigate = useNavigate(); // Get the navigate function

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      errorMessage: '', // Reset error message when the user types
    });
  };

  const handleLogin = () => {
    const { username, password } = formData;

    if (username === 'userName' && password === '123') {
      // Successful login logic
      alert("Login Successful");
      navigate('/'); // Redirect to the home page
    } else {
      setFormData({ ...formData, errorMessage: 'Invalid username or password' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl text-center mb-4 font-extrabold text-gray-900">Log In</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 px-4 bg-blue-500 hover-bg-blue-600 text-white rounded-md"
        >
          Log In
        </button>
        {formData.errorMessage && <p className="text-red-600 mt-2">{formData.errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
