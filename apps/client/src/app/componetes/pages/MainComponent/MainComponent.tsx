// MainComponent.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";


const MainComponent: React.FC = () => {
  const [isLogin, setLogin] = useState(true);

  const switchForm = () => {
    setLogin(!isLogin);
  };

  const handleGoogleLogin = () => {
    //  Google login
    console.log('Logging in with Google');
  };

  const handleFacebookLogin = () => {
    //  Facebook login
    console.log('Logging in with Facebook');
  };

  const handleGitHubLogin = () => {
    //  GitHub login
    console.log('Logging in with GitHub');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500" style={{ backgroundImage: 'url("https://th.bing.com/th/id/OIG.ndGdIMsbVI9HnTYLJ7Fa?pid=ImgGn")', backgroundSize: 'cover' }}>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          <Link to={isLogin ? '/login' : '/SignIn'} className="block w-full">
            {isLogin ? 'Login' : 'Sign Up'}
          </Link>
        </h2>

        <div className="mt-6">
          <button
            onClick={switchForm}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
          </button>
        </div>

        <div className="mt-6 flex items-center space-x-2">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-1/3 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
            title="Login with Google"
          >
            <FcGoogle  size={24} className="mr-2" />
            <span>Google</span>
          </button>
          <button
            onClick={handleFacebookLogin}
            className="flex items-center justify-center w-1/3 px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-500"
            title="Login with Facebook"
          >
            <ImFacebook2    size={24} className="mr-2" />
            <span>Facebook</span>
          </button>
          <button
            onClick={handleGitHubLogin}
            className="flex items-center justify-center w-1/3 px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:border-gray-600"
            title="Login with GitHub"
          >
            <FaGithub size={24} className="mr-2" />
            <span>GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
