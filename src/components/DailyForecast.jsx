const DailyForecast = ({ weatherData }) => {
    const URL_IMG = process.env.NEXT_PUBLIC_URL_IMG;


    return (
      <div className="p-2 lg:p-4 mt-6 md:mt-0 md:bg-gray-900 md:rounded-lg md:border border-gray-800">
        <h2 className="lg:text-lg font-bold text-gray-400">Próximos días</h2>
        <div className="flex flex-col">
          {Object.entries(weatherData.nextDaysForecast).map(([date, dayData], index, array) => {
            const temperatures = dayData.map((entry) => entry.temperatura);
            const minima = Math.min(...temperatures).toFixed(0);
            const maxima = Math.max(...temperatures).toFixed(0);
            const mainIcon = dayData[5] ? dayData[5].icon : dayData[0].icon;
            const descrip = dayData[5] ? dayData[5].descripcion : dayData[0].descripcion;
  
            const dayName = index === 0 ? 'hoy' : new Date(date).toLocaleDateString('es-ES', { weekday: 'long' }).slice(0,3);
  
            return (
              <div key={date} className={`w-auto px-3 md:px-0 lg:py-4 ${index === array.length - 1 ? '' : 'border-b border-gray-800'} flex items-center justify-between md:justify-stretch`}>
                    <div className="md:w-[40px] lg:w-[50px]">
                        <p className="w-auto md:test-sm lg:text-lg lg:font-semibold text-gray-400">{dayName}</p>
                    </div>
                    {mainIcon && (
                    <div className="w-[50px] lg:w-[70px] flex justify-center">
                        <img
                            src={`${URL_IMG}/${mainIcon}@2x.png`}
                            alt="Ícono del clima"
                            className="lg:w-14 lg:h-14"
                        />
                    </div>
                    )}
                <p className="w-[120px] lg:w-[160px] text-left text-sm lg:text-lg text-gray-200">{descrip}</p>
                <p className="text-sm lg:text-lg text-gray-200 font-extralight"><span className="font-extrabold">{maxima}</span> / {minima}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default DailyForecast;
  
  
  