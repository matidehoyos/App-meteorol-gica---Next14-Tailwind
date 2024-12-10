import Image from 'next/image';
import { FaCloud, FaCloudRain, FaMapMarkerAlt, FaRegClock, FaTemperatureHigh, FaWind } from 'react-icons/fa';


const CurrentWeather = ({cityName, weatherData}) => {
    const URL_IMG = process.env.NEXT_PUBLIC_URL_IMG;

  return (
      <div>
        <div className="md:px-3 lg:px-4 md:py-6 flex flex-col md:flex-row md:items-end justify-center md:justify-between bg-transparent rounded-lg md:border border-gray-400">
            <h2 className="text-2xl lg:text-3xl font-normal text-gray-300 flex items-center"><FaMapMarkerAlt className='inline text-sm mr-1' />{cityName.toUpperCase()}, {weatherData.currentWeather.pais}</h2>
            <p className="text-sm text-gray-300 flex items-center"><FaRegClock className='inline text-sm mr-1'/><span className="text-2xl lg:text-3xl md:font-bold">{weatherData.currentWeather.horaActual}</span></p>
        </div>
        <div className="hidden md:flex md:mt-3 lg:mt-6 md:px-3 lg:px-10 py-2 lg:py-6 flex-col gap-4 bg-transparent rounded-md border border-gray-400">
            <h2 className="lg:text-lg font-bold text-gray-100">Clima actual</h2>     
            <div className="flex justify-start items-end gap-8 lg:gap-10 bg-transparent">
                <div className="flex flex-col justify-center items-center">
                    {weatherData.currentWeather.icon && (
                        <Image
                        src={`${URL_IMG}/${weatherData.currentWeather.icon}@2x.png`}
                        alt="Ícono del clima"
                        width='66'
                        height='66'
                        className='w-auto h-auto scale-150'
                    />
                    )}
                    <p className="text-xs lg:text-sm">Amanecer: <span className="font-bold">{weatherData.currentWeather.amanecer}</span></p>
                    <p className="text-xs lg:text-sm">Atardecer: <span className="font-bold">{weatherData.currentWeather.atardecer}</span></p>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <p className="text-4xl lg:text-7xl font-bold text-yellow-400">{weatherData.currentWeather.temperatura}<span className="pl-2 text-3xl font-normal"></span></p>
                    <p className="text-lg lg:text-xl font-semibold">{weatherData.currentWeather.descripcion}</p>
                    <p className="text-xs lg:text-sm">S.Térmica: <span className="font-bold">{weatherData.currentWeather.termica}</span>°C</p>
                </div>
                <div className="flex flex-col items-start lg:gap-1 lg:relative top-1">
                    <p className="lg:text-lg text-gray-200">Viento: <span className="font-bold text-white">{weatherData.currentWeather.velocidadViento}</span>Km/h</p>
                    <p className="lg:text-lg text-gray-200">Lluvias: <span className="font-bold text-white">{weatherData.currentWeather.precipitaciones}</span>%</p>
                    <p className="lg:text-lg text-gray-200">Nubosidad: <span className="font-bold text-white">{weatherData.currentWeather.nubosidad}</span>%</p>
                    <p className="lg:text-lg text-gray-200">Visibilidad: <span className="font-bold text-white">{weatherData.currentWeather.visibilidad}</span>km</p>
                </div>
            </div>
        </div>
        <div className='mt-2 flex justify-center items-end gap-14 md:hidden'>
            <div className='flex flex-col justify-center items-center'>
                {weatherData.currentWeather.icon && (
                    <Image
                        src={`${URL_IMG}/${weatherData.currentWeather.icon}@4x.png`}
                        alt="Ícono del clima"
                        width='80'
                        height='80'
                        className='w-auto h-auto scale-150'
                    />
                    )}
                    <p className="text-5xl font-bold text-yellow-400">{weatherData.currentWeather.temperatura}<span className="pl-2 text-3xl font-normal">°C</span></p>
                    <p className="text-xl text-gray-300 font-normal">{weatherData.currentWeather.descripcion}</p>
            </div>
                <div className='flex flex-col justify-center items-center text-gray-200 gap-4'>
                    <p className='flex items-center gap-1'><FaTemperatureHigh className='inline'/>{weatherData.currentWeather.termica}</p>
                    <p className='flex items-center gap-1'><FaWind className='inline'/>{weatherData.currentWeather.velocidadViento}</p>
                    <p className='flex items-center gap-1'><FaCloudRain className='inline'/>{weatherData.currentWeather.precipitaciones}%</p>
                    <p className='flex items-center gap-1'><FaCloud className='inline'/>{weatherData.currentWeather.precipitaciones}%</p>
                </div>
        </div>
     </div>
  );
};

export default CurrentWeather;