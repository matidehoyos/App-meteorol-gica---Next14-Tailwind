import { NextResponse } from 'next/server';
import axios from 'axios';

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const URL_API = process.env.URL_API;

export async function GET(req, { params }) {
  const { cityName } = params;

  if (!cityName || typeof cityName !== 'string' || cityName.trim().length === 0) {
    return NextResponse.json(
      { error: 'El parámetro cityName es requerido y debe ser un texto válido.' },
      { status: 400 }
    );
  }

  try {
    const currentWeatherResponse = await axios.get(`${URL_API}/weather`, {
      params: {
        q: cityName.trim(),
        lang: 'es',
        appid: WEATHER_API_KEY,
        units: 'metric',
      },
    });

    const currentWeatherData = currentWeatherResponse.data;
    const sunrise = new Date(currentWeatherData.sys.sunrise * 1000);
    const sunset = new Date(currentWeatherData.sys.sunset * 1000);
    const timezoneOffset = currentWeatherData.timezone * 1000;
    const amanecerLocal = new Date(sunrise.getTime() + timezoneOffset).toLocaleTimeString('es-AR', { hour12: false });
    const atardecerLocal = new Date(sunset.getTime() + timezoneOffset).toLocaleTimeString('es-AR', { hour12: false });
    const velocidadVientoKmh = currentWeatherData.wind.speed * 3.6;

    const currentWeather = {
      temperatura: currentWeatherData.main.temp.toFixed(1),
      termica: currentWeatherData.main.feels_like.toFixed(1),
      minima: currentWeatherData.main.temp_min,
      maxima: currentWeatherData.main.temp_max,
      visibilidad: currentWeatherData.visibility,
      velocidadViento: velocidadVientoKmh.toFixed(1),
      direccionViento: currentWeatherData.wind.deg,
      humedad: currentWeatherData.main.humidity,
      presion: currentWeatherData.main.pressure,
      nubosidad: currentWeatherData.clouds.all,
      precipitaciones: currentWeatherData.rain?.["1h"] || 0,
      descripcion: currentWeatherData.weather[0]?.description || 'No disponible',
      icon: currentWeatherData.weather[0]?.icon || null,
      amanecer: amanecerLocal.slice(0,5),
      atardecer: atardecerLocal.slice(0,5),
      horaActual: new Date(Date.now() + timezoneOffset).toLocaleTimeString('es-AR', { hour12: false }).slice(0,5),
      pais: currentWeatherData.sys.country
    };

    const forecastResponse = await axios.get(`${URL_API}/forecast`, {
      params: {
        q: cityName.trim(),
        lang: 'es',
        appid: WEATHER_API_KEY,
        units: 'metric',
      },
    });

    const forecastData = forecastResponse.data;
    const now = new Date(Date.now() + timezoneOffset);
    const todayDate = now.toISOString().split('T')[0];
    const todayEnd = new Date(`${todayDate}T21:00:00Z`).getTime();

    const todayForecast = forecastData.list.filter(entry => {
      const entryTime = (entry.dt * 1000) + timezoneOffset;
      const entryDate = new Date(entryTime).toISOString().split('T')[0];
      return entryDate === todayDate && entryTime <= todayEnd;
    }).map(entry => ({
      hora: new Date((entry.dt * 1000) + timezoneOffset).toLocaleTimeString('es-AR', { hour12: false }),
      temperatura: entry.main.temp,
      icon: entry.weather[0]?.icon,
      fecha: now.toLocaleDateString('es-ES', { weekday: 'long' }) 
    }));

    const nextDaysForecast = forecastData.list.filter(entry => {
      const entryTime = (entry.dt * 1000) + timezoneOffset;
      return entryTime;
    }).reduce((acc, entry) => {
      const entryDate = new Date((entry.dt * 1000) + timezoneOffset).toISOString().split('T')[0];
      if (!acc[entryDate]) {
        acc[entryDate] = [];
      }
      acc[entryDate].push({
        hora: new Date((entry.dt * 1000) + timezoneOffset).toLocaleTimeString('es-AR', { hour12: false }),
        temperatura: entry.main.temp,
        icon: entry.weather[0]?.icon,
        descripcion: entry.weather[0].description
      });
      return acc;
    }, {});

    return NextResponse.json({
      currentWeather,
      todayForecast,
      nextDaysForecast,
    });
  } catch (error) {
    console.error('Error al obtener datos del clima:', error.response?.data || error.message);

    if (error.response) {
      const { status, data } = error.response;
      return NextResponse.json(
        { error: data.message || 'Error al obtener datos del clima desde la API externa' },
        { status: status }
      );
    }

    return NextResponse.json(
      { error: 'Ocurrió un error inesperado al procesar la solicitud.' },
      { status: 500 }
    );
  }
}
