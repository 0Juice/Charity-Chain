import React, { useState } from 'react';

const RazorpayComponent = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: '',
  });

  const [paymentAmount, setPaymentAmount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement your payment logic here, e.g., send payment data to a server
    // You can access the payment amount using the paymentAmount state variable.
    // Here, you can send paymentAmount along with other payment details.
  };
  const handleLogin = () => {
    alert("Payment Succesfull")
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cardHolder" className="block text-gray-700">Card Holder</label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex flex-row justify-between mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="expiry" className="block text-gray-700">Expiry Date</label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                value={formData.expiry}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="cvv" className="block text-gray-700">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="paymentAmount" className="block text-gray-700">Payment Amount</label>
            <input
              type="number"
              id="paymentAmount"
              name="paymentAmount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(parseFloat(e.target.value))}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
          onClick={handleLogin}
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover-bg-blue-600"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default RazorpayComponent;
