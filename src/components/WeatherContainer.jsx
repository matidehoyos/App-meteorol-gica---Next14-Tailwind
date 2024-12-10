'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

const WeatherContainer = ({ cityName, setCityName }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`/api/forecast/${cityName}`);
        setWeatherData(res.data);
      } catch (err) {
        setError(`Error al buscar el clima de ${cityName}, por favor verifica que la ciudad exista y esté bien escrita.`);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [cityName]);


  if (loading) {
    return (
      <div className="h-[calc(100vh-60px)] lg:h-[554px] flex flex-col items-center justify-center gap-6">
        <div className="w-16 h-16 border-4 border-yellow-300 border-dotted rounded-full animate-spin"></div>
        <p className="text-lg text-yellow-300 font-bold">Analizando el clima</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-[80%] mx-auto h-[calc(100vh-60px)] lg:h-[554px] flex flex-col items-center justify-center text-center">
        <p className="text-xl text-yellow-300">{error}</p>
        <button
          onClick={() => setCityName('Buenos Aires')}
          className="mt-4 px-4 py-2 bg-yellow-300 text-gray-900 rounded-lg hover:bg-yellow-400 transition"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="md:w-[94%] lg:w-[1000px] pb-20 md:pb-0 mx-auto flex flex-col md:flex-row justify-between items-stretch gap-3 lg:gap-6 overflow-hidden">
      <div className="flex flex-col lg:justify-between flex-1">
        <CurrentWeather cityName={cityName} weatherData={weatherData} />
        <HourlyForecast weatherData={weatherData} />
      </div>
      <DailyForecast weatherData={weatherData} />
    </div>
  );
};

export default WeatherContainer;
