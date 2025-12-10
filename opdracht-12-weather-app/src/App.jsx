import './App.css'
import { useState, useEffect } from 'react';
import WeatherInfo from '../components/WeatherInfo.jsx';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Oslo');

  const apiKey = "416074eaf2e28bba2743f4d2627f3a5a";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const weatherData = await response.json();
        setWeather(weatherData);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, []); 

  return (
    <div>
      {weather ? (
        <WeatherInfo weather={weather} />
      ) : (
        <p>Het weer wordt geladen...</p>
      )}
    </div>
  );
}

export default App;
