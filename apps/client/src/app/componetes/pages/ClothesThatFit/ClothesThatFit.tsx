import React from 'react';

const ClothesThatFit: React.FC<{
  gender: string;
  clothingType: string;
  color: string;
  clothingOption: string;
}> = ({ gender, clothingType, color, clothingOption }) => {
  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Clothes That Fit</h1>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Your Selection:</h2>
        <p>
          Gender: {gender}, Type: {clothingType}, Color: {color}, Option:{' '}
          {clothingOption}
        </p>
        <p>We didn't find anything suitable.</p>
        <p>
          I would appreciate it if you could describe to us the type of clothing you have.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Chat with our Fashion Advisor:</h2>
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/CC3ulaJUAaqb2G7tuSkHM"
          width="100%"
          style={{ height: '60%', minHeight: '400px' }}
          className="border-2 border-gray-300 rounded-md"
        ></iframe>
      </div>
    </div>
  );
};

export default ClothesThatFit;
