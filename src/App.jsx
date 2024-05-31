import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
    const [query, setQuery] = useState({ q: "delhi" });
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);

    const getWeather = async () => {
        const data = await getFormattedWeatherData({ ...query, units }).then(
            (data) => {
                setWeather(data);
            }
        );

        console.log(data);
    };

    useEffect(() => {
        getWeather();
    }, [units, query]);

    const formatBackground = () => {
        if (!weather) return "from-cyan-600 to-blue-700";
        const t = units === "metric" ? 30 : 60;
        console.log('FORMAT BACKGROUND')
        console.log(weather.temp, t)
        if (weather.temp <= t) return "from-cyan-600 to-blue-700";
        return "from-yellow-600 to-orange-700";
    };

    return (
        <div
            className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
        >
            <TopButtons setQuery={setQuery} />
            <Inputs setQuery = {setQuery} setUnits= {setUnits} />

            {weather && (
                <>
                    <TimeAndLocation weather={weather} />
                    <TempAndDetails weather={weather} />
                    <Forecast
                        title="3 hour step forecast"
                        data={weather.hourly}
                    />
                    <Forecast title="Daily Forecast" data={weather.daily} />
                </>
            )}
        </div>
    );
}

export default App;
