import Image from "next/image";

const DailyForecast = ({ weatherData }) => {
    const URL_IMG = process.env.NEXT_PUBLIC_URL_IMG;


    return (
      <div className="lg:p-4 mt-4 md:mt-0 bg-transparent md:rounded-lg md:border border-gray-400">
        <h2 className="text-lg md:font-bold text-gray-100">Próximos días</h2>
        <div className="px-2 md:px-0 flex flex-col bg-black md:bg-transparent bg-opacity-15">
          {Object.entries(weatherData.nextDaysForecast).map(([date, dayData], index, array) => {
            const temperatures = dayData.map((entry) => entry.temperatura);
            const minima = Math.min(...temperatures).toFixed(0);
            const maxima = Math.max(...temperatures).toFixed(0);
            const mainIcon = dayData[5] ? dayData[5].icon : dayData[0].icon;
            const descrip = dayData[5] ? dayData[5].descripcion : dayData[0].descripcion;
  
            const dayName = index === 0 ? 'hoy' : new Date(date).toLocaleDateString('es-ES', { weekday: 'long' }).slice(0,3);
  
            return (
              <div key={date} className={`w-auto px-3 md:px-0 lg:py-4 ${index === array.length - 1 ? '' : 'border-b border-gray-400'} flex items-center justify-between md:justify-stretch`}>
                    <div className="md:w-[40px] lg:w-[50px]">
                        <p className="w-auto md:test-sm lg:text-lg lg:font-semibold text-gray-200">{dayName}</p>
                    </div>
                    {mainIcon && (
                    <div className="w-[50px] lg:w-[70px] flex justify-center">
                        <Image
                            src={`${URL_IMG}/${mainIcon}@2x.png`}
                            alt="Ícono del clima"
                            width={40}
                            height={40}
                            className="w-auto h-auto"
                        />
                    </div>
                    )}
                <p className="w-[120px] lg:w-[160px] text-left text-md lg:text-lg text-gray-100">{descrip}</p>
                <p className="text-md lg:text-lg text-gray-100 font-extralight"><span className="font-bold">{maxima}</span> / {minima}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default DailyForecast;
  
  
  