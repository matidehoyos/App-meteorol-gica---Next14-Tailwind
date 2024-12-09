'use client'
import { useState } from 'react';
import WeatherContainer from './WeatherContainer';
import NavBar from './NavBar';

const Main = () => {
  const [cityName, setCityName] = useState('Buenos Aires'); 

  const handleSearch = (searchQuery) => {
    setCityName(searchQuery);
  };

  return (
   <div className='w-full min-h-screen bg-gray-950'>
      <NavBar onSearch={handleSearch} /> 
      <WeatherContainer cityName={cityName} setCityName={setCityName} />
    </div>
  );
};

export default Main;
