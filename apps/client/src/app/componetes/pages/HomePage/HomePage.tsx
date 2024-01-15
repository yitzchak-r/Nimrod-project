import React from 'react';
import {  useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/matchingClothes');
  };

  const backgroundImageStyle = {
    backgroundImage: 'url("https://th.bing.com/th/id/OIG.1vHtaRcHFkP2yc3SzFcr?pid=ImgGn")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set the height of the background image container
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div className="bg-gray-200 p-8" style={backgroundImageStyle}>
      <div className="text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome</h1>
        <p className="text-lg mb-6">This is where all the fun begins</p>
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 ease-in-out"
          onClick={handleButtonClick}
        >
          Let's Get Started
        </button>
      </div>
    </div>
  );
};




export default HomePage;
