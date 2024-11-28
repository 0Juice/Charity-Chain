import React, { useState } from 'react';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [charity, setCharity] = useState('');
  const charityOptions = ['Charity 1', 'Charity 2', 'Charity 3'];
  const [buttonClicked, setButtonClicked] = useState(false); 
 

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCharityChange = (e) => {
    setCharity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, charity }),
      });
      
          
      if (response.ok) {
        // Request was successful
        const data = await response.json();
        console.log(data.message);
        alert(data.message) // Log the response from the backend
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error('Error sending donation data');
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
    }
  };
  const handleButtonClick = () => {
    setButtonClicked(true); // Set the buttonClicked state to true
  };
 

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Donation Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              required
              className="w-full px-3 py-2 border border-black rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Charity:</label>
            <select
              value={charity}
              onChange={handleCharityChange}
              required
              className="w-full px-3 py-2 border border-black rounded-md"
            >
              <option value="" disabled>
                Select a charity
              </option>
              {charityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className={`w-full ${
              buttonClicked ? 'bg-blue-500' : 'bg-blue-500'
            } text-white rounded-md py-2 hover:bg-green-600`}
            onClick={handleButtonClick} // Add this onClick handler
          >
            Donate
          </button>

        </form>
      </div>
    </div>
  );
};

export default DonationForm;
