// MainComponent.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";

const MainComponent: React.FC = () => {
  const [isLogin, setLogin] = useState(true);

  const switchForm = () => {
    setLogin(!isLogin);
  };

  const handleGoogleLogin = () => {
    // Google login
    console.log('Logging in with Google');
  };

  const handleFacebookLogin = () => {
    // Facebook login
    console.log('Logging in with Facebook');
  };

  return (
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500" style={{ backgroundImage: 'url("https://th.bing.com/th/id/OIG.ndGdIMsbVI9HnTYLJ7Fa?pid=ImgGn")', backgroundSize: 'cover' }}>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          <Link
            to={isLogin ? '/login' : '/SignIn'}
            className="block w-full text-indigo-500 hover:text-indigo-700 focus:outline-none focus:underline relative"
          >
            {isLogin ? 'Login' : 'Sign Up'}
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 transition-transform">&#10132;</span>
          </Link>
        </h2>

        <div className="mt-6">
          <button
            onClick={switchForm}
            className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring ${
              isLogin
                ? 'text-white bg-blue-500 hover:bg-blue-600 focus:border-blue-300'
                : 'text-white bg-green-500 hover:bg-green-600 focus:border-green-300'
            }`}
          >
            {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
          </button>
        </div>

        <div className="mt-6 flex items-center space-x-2">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-1/2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
            title="Login with Google"
          >
            <FcGoogle size={24} className="mr-2" />
            <span>Google</span>
          </button>
          <button
            onClick={handleFacebookLogin}
            className="flex items-center justify-center w-1/2 px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-500"
            title="Login with Facebook"
          >
            <ImFacebook2 size={24} className="mr-2" />
            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
