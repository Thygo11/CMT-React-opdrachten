function WeatherInfo({ weather }) {
  if (!weather || !weather.main || !weather.weather) {
    return <p>Data wordt geladen...</p>;
  }

  const icon = weather.weather[0].icon; 
  const iconUrl = `https://openweathermap.org/img/wn/10d@2x.png`;

  return (
    <section>
      <h1>{weather.name}</h1>
      <img src={iconUrl} alt="Weather icon" />

      <p>Temperatuur: {weather.main.temp}°C</p>
      <p>Gevoelstemperatuur: {weather.main.feels_like}°C</p>
      <p>Luchtvochtigheid: {weather.main.humidity}%</p>
      <p>Wind snelheid: {weather.wind.speed} m/s</p>
    </section>
  );
}

export default WeatherInfo;
