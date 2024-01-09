import styles from './ResetPassword.module.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleResetPassword = async () => {
    // Add logic to send a reset password link to the provided email
    // This can involve making an API call or dispatching an action depending on your setup

    // Simulating a successful reset for demonstration purposes
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Reset Password</h2>

        {isSuccess ? (
          <div className="text-green-600 text-center">
            Reset instructions have been sent to your email. Please check your inbox.
          </div>
        ) : (
          <>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div>
              <button
                type="button"
                onClick={handleResetPassword}
                className="w-full mt-4 bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500"
              >
                Reset Password
              </button>
            </div>
          </>
        )}

        <div className="text-center mt-4">
          <Link to="/login" className="text-indigo-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;


