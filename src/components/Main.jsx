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
<div
  className="w-screen min-h-screen md:flex items-center justify-center"
  style={{ 
    backgroundImage: 'url(/bg1.jpeg)',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  }}>   
      <div className='p-2 lg:p-4 bg-black bg-opacity-60 md:rounded-lg md:border md:border-orange-500' style={{
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
      }}>
          <NavBar onSearch={handleSearch} /> 
          <WeatherContainer cityName={cityName} setCityName={setCityName} />
      </div>   
  </div>
  );
};

export default Main;
