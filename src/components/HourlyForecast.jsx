import Image from "next/image";

const HourlyForecast = ({weatherData}) => {
    const URL_IMG = process.env.NEXT_PUBLIC_URL_IMG;


    return (
        <div className="px-[2%] md:px-3 lg:px-4 py-2 lg:py-7 mt-6 md:mt-3 lg:mt-6 md:bg-gray-900 rounded-lg md:border border-gray-800">
            <h2 className="text-center md:text-left lg:text-lg font-bold text-gray-400">Lo que resta del día</h2>
            <div className="mt-4 md:mt-5 flex justify-center md:justify-start">
                {weatherData.todayForecast.map((forecast, index) => (
                <div key={index} className="px-3 lg:px-4 flex flex-col items-center justify-center border-r border-gray-800">
                    <p className="text-md font-bold text-gray-300">{forecast.hora.slice(0,2)}hs</p>
                    {forecast.icon && (
                    <Image
                    src={`${URL_IMG}/${forecast.icon}@2x.png`}
                    alt="Ícono del clima"
                    width={40}
                    height={40}
                    className="w-auto h-auto"
                     />
                    )}
                    <p className="md:text-lg lg:text-xl font-bold">{forecast.temperatura.toFixed(1)}°C</p>
                </div>
                ))}
            </div>
      </div>
    );
  };
  
  export default HourlyForecast;