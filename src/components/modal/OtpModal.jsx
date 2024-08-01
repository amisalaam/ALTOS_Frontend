import React, { useState } from 'react';
import axios from 'axios';

const OtpModal = ({ show, handleClose, email }) => {
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpSuccess, setOtpSuccess] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleVerifyOtp = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      const response = await axios.post(`${apiUrl}/api/otp/verify/`, {
        email,
        otp
      });
      console.log(response);
      if (response.status === 200) {
        setOtpSuccess("User verified successfully.");
        handleClose(); // Close the modal
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        setOtpError(error.response.data.error);
      } else {
        setOtpError("An error occurred during OTP verification.");
      }
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-1/4">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl">Enter OTP</h3>
          <button className="text-xl" onClick={handleClose}>&times;</button>
        </div>
        <div className="p-4">
          <form onSubmit={handleVerifyOtp}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {otp.length !== 6 && <span className="text-red-500 text-sm">Please check your email for the OTP.</span>}
            </div>
            {otpError && <div className="text-red-500 text-sm mb-4">{otpError}</div>}
            {otpSuccess && <div className="text-green-500 text-sm mb-4">{otpSuccess}</div>}
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                disabled={otp.length !== 6}
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
