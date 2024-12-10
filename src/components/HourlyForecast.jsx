import Image from "next/image";

const HourlyForecast = ({weatherData}) => {
    const URL_IMG = process.env.NEXT_PUBLIC_URL_IMG;


    return (
        <div className="md:px-3 lg:px-4 py-2 lg:py-6 mt-6 md:mt-3 lg:mt-6 bg-transparent rounded-lg md:border border-gray-400">
            <h2 className="text-lg md:font-bold text-gray-100">Lo que resta del día</h2>
            <div className="mt-4 md:mt-4 flex justify-start">
                {weatherData.todayForecast.map((forecast, index) => (
                <div key={index} className="px-3 lg:px-4 flex flex-col items-center justify-center border-r border-gray-400">
                    <p className="text-md font-medium text-gray-100">{forecast.hora.slice(0,2)}hs</p>
                    {forecast.icon && (
                    <Image
                    src={`${URL_IMG}/${forecast.icon}@2x.png`}
                    alt="Ícono del clima"
                    width={40}
                    height={40}
                    className="w-auto h-auto"
                     />
                    )}
                    <p className="md:text-lg font-bold text-gray-50">{forecast.temperatura.toFixed(1)}°C</p>
                </div>
                ))}
            </div>
      </div>
    );
  };
  
  export default HourlyForecast;