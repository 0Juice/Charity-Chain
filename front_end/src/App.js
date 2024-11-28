import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import LoginPage from './pages/loginpage';
import RegistrationForm from './pages/registerpage';
import RazorpayComponent from './pages/razorpay';
import CharityAboutPage from './pages/aboutpage';
import DonationForm from './pages/donation';


function App() {

  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/razorpay" element={<RazorpayComponent />} />
        <Route path="/about" element={<CharityAboutPage />} />
        <Route path="/donation" element={<DonationForm/>} />
      </Routes>
      
    </div>
  );
}

export default App;
