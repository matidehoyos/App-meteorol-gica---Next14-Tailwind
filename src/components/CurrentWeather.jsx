import { FaCloud, FaCloudRain, FaMapMarkerAlt, FaRegClock, FaWind } from 'react-icons/fa';


const CurrentWeather = ({cityName, weatherData}) => {
    const URL_IMG = process.env.NEXT_PUBLIC_URL_IMG;

  return (
      <div>
        <div className="px-[2%] md:px-3 lg:px-4 py-2 lg:py-6 flex flex-col md:flex-row md:items-end justify-center md:justify-between md:bg-gray-900 rounded-lg md:border border-gray-800">
            <h2 className="text-lg lg:text-3xl font-normal text-gray-200 flex items-center"><FaMapMarkerAlt className='inline text-sm mr-1' />{cityName.toUpperCase()}, {weatherData.currentWeather.pais}</h2>
            <p className="text-sm text-gray-400 flex items-center"><FaRegClock className='inline text-sm mr-1'/><span className="text-lg lg:text-xl font-bold text-gray-200">{weatherData.currentWeather.horaActual}</span></p>
        </div>
        <div className="hidden md:flex md:mt-3 lg:mt-6 md:px-3 lg:px-10 py-2 lg:py-10 flex-col gap-4 bg-gray-900 rounded-md border border-gray-800">
            <h2 className="lg:text-lg font-bold text-gray-400">Clima actual</h2>     
            <div className="flex justify-start items-center gap-8 lg:gap-10">
                <div className="flex flex-col justify-center items-center">
                    {weatherData.currentWeather.icon && (
                        <img
                            src={`${URL_IMG}/${weatherData.currentWeather.icon}.png`}
                            alt="Ícono del clima"
                            className="lg:h-20 lg:w-20 scale-150"
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
                    <p className="text-gray-400 lg:text-lg">Viento: <span className="font-bold text-gray-100">{weatherData.currentWeather.velocidadViento}</span>Km/h</p>
                    <p className="text-gray-400 lg:text-lg">Lluvias: <span className="font-bold text-gray-100">{weatherData.currentWeather.precipitaciones}</span>%</p>
                    <p className="text-gray-400 lg:text-lg">Nubosidad: <span className="font-bold text-gray-100">{weatherData.currentWeather.nubosidad}</span>%</p>
                    <p className="text-gray-400 lg:text-lg">Visibilidad: <span className="font-bold text-gray-100">{weatherData.currentWeather.visibilidad}</span>km</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center md:hidden'>
            {weatherData.currentWeather.icon && (
                <img
                                src={`${URL_IMG}/${weatherData.currentWeather.icon}@2x.png`}
                                alt="Ícono del clima"
                                className='scale-150'
                                />
                            )}
                <p className="text-4xl font-bold text-yellow-400">{weatherData.currentWeather.temperatura}<span className="pl-2 text-3xl font-normal">°C</span></p>
                <p className="text-lg text-gray-400 font-normal">{weatherData.currentWeather.descripcion}</p>
                <div className='w-[60%] mt-6 flex justify-between'>
                    <p className='flex items-center gap-1'><FaWind className='inline'/>{weatherData.currentWeather.velocidadViento}</p>
                    <p className='flex items-center gap-1'><FaCloudRain className='inline'/>{weatherData.currentWeather.precipitaciones}%</p>
                    <p className='flex items-center gap-1'><FaCloud className='inline'/>{weatherData.currentWeather.precipitaciones}%</p>
                </div>
        </div>
     </div>
  );
};

export default CurrentWeather;