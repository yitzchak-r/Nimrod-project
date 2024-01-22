import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { useNavigate } from 'react-router-dom';

type Gender = "Men" | "Women";


const MatchingClothes: React.FC = () => {
  const [gender, setGender] = useState<Gender | null>(null);
  const [clothingType, setClothingType] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [clothingOption, setClothingOption] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const clothingOptions = {
    Men: ['Shirt', 'Pants', 'Jacket', 'Tie', 'Jeans', 'Suit'] ,
    Women: ['Dress', 'Skirt', 'Blouse', 'Sweater', 'Jeans', 'Coat'],
  };


  const navigate = useNavigate();

  const handleGenderSelection = (selectedGender: Gender) => {
    setGender(selectedGender);
    setClothingType(null);
    setColor(null);
    setClothingOption(null);
  };

  const handleClothingTypeSelection = (selectedType: string) => {
    setClothingType(selectedType);
    setColor(null);
    setClothingOption(null);
  };

  useEffect(() => {
    if (loading) {
      const timeoutId = setTimeout(() => {
        setLoading(false);
        navigate('/ClothesThatFit');
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [loading, navigate]);



  const handleStartProcessing = async () => {
    setLoading(true);

    try {
//שליחת המידע שהלקוח בחר לשרת
      const response = await fetch('http://localhost:3001/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gender,
          clothingType,
          color,
          clothingOption,
        }),
      });

      if (response.ok) {
        console.error('Failed to send user selection to the server:', response.statusText);

        console.log('User selection sent successfully');
      } else {
        console.error('Failed to send user selection to the server');
      }
    } catch (error) {
      console.error('Error sending user selection:', error);
    } finally {
      setLoading(false);
      navigate('/ClothesThatFit');
    }
  };


  return (
<div className="bg-gray-100 p-8 rounded-md shadow-md h-screen flex flex-col justify-center items-center" style={{ backgroundImage: 'url("https://th.bing.com/th/id/OIG.vCAYZzmk_EQoX0l06_Zv?pid=ImgGn")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-4xl font-bold mb-6 text-center">Matching Clothes</h1>


      {!loading && !gender && (
        <div className="mb-4 flex flex-col items-center">
          <p className="block font-bold mb-2 text-sm">Choose Gender:</p>
          <div className="flex justify-around w-3/4">
            <button
              onClick={() => handleGenderSelection('Men')}
              className="gender-button flex flex-col items-center bg-blue-250 hover:bg-blue-500 text-white font-bold py-6 px-7 rounded my-2"
            >
              <img
                src="https://th.bing.com/th/id/OIG.FOWKlzED4R4zZ9huj7_D?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
                alt="Male"
                className="w-100 h-100 mb-2"
              />
              Men
            </button>
            <button
              onClick={() => handleGenderSelection('Women')}
              className="gender-button flex flex-col items-center bg-pink-250 hover:bg-pink-500 text-white font-bold py-7 px-7 rounded my-2"
            >
              <img
                src="https://th.bing.com/th/id/OIG.S.Qyj79jCFnjGG2m8mSU?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
                alt="Female"
                className="w-100 h-100 mb-2"
              />
              Women
            </button>
          </div>
        </div>
      )}

      {!loading && gender && !clothingType && (
        <div className="mb-4 flex">
          <p className="block font-bold mb-2 text-sm">Choose Clothing Type:</p>
          {clothingOptions[gender].map((type) => (
            <button
              key={type}
              onClick={() => handleClothingTypeSelection(type)}
              className="clothing-type-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              {type}
            </button>
          ))}
        </div>
      )}

      {!loading && clothingType && !color && (
        <div className="mb-4">
          <p className="block font-bold mb-2 text-sm">Select Color:</p>
          <SketchPicker
            color={color || '#ffffff'}
            onChange={(newColor) => setColor(newColor.hex)}
          />
        </div>
      )}

      {!loading && color && !clothingOption && (
        <div className="mb-4">
          <p className="block font-bold mb-2 text-sm">
            Choose Clothing Option:
          </p>
          <select
  className="border p-2 w-full rounded-md"
  value={clothingOption || ""}
  onChange={(e) => setClothingOption(e.target.value)}
>
  <option value="" disabled>
    Choose Clothing Option
  </option>
  {/* Add more clothing options as needed */}
  <option value="Short">Short</option>
  <option value="Long">Long</option>
  <option value="Winter">Winter</option>
  <option value="Summer">Summer</option>
</select>

        </div>
      )}

      {!loading && clothingOption && (
        <div className="mb-4">
          <p className="block font-bold mb-2 text-sm">Great, we're ready </p>
          <button
            onClick={handleStartProcessing}
            className="start-processing-button bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Start Processing
          </button>
        </div>
      )}

      {loading && (
        <div className="mb-4">
          <p className="block font-bold mb-2 text-sm">
            Looking for suitable clothing for you. Please wait a few moments.
          </p>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {!loading && clothingOption && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Your Selection:</h2>
          <p>
            Gender: {gender}, Type: {clothingType}, Color: {color}, Option:{' '}
            {clothingOption}
          </p>
        </div>
      )}
    </div>
  );
};

export default MatchingClothes;