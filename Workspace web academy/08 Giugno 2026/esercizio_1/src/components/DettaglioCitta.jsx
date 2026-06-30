import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCityStore } from "../store/useCityStore";

export function DettaglioCitta() {
  const { citta } = useParams();
  const navigate = useNavigate();

  const city = useCityStore((state) => state);
  const setCity = useCityStore((state) => state.setCity);
  const deleteCity = useCityStore((state) => state.deleteCity);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=API_KEY&units=metric&lang=it`
      )
      .then((response) => {
        setCity(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [citta, setCity]);

  if (loading) {
    return (
      <div className="loading-container">
        <span className="weather-loader">☀️</span>
        <h2>Caricamento in corso...</h2>
      </div>
    );
  }

  return (
    <>
      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        Torna indietro
      </button>

      <div className="weather-card">
        <h2>{city.name}</h2>

        <img
          src={`https://openweathermap.org/img/wn/${city.weather?.[0]?.icon}@2x.png`}
          alt={city.weather?.[0]?.description}
        />

        <h1>{Math.round(city.main?.temp)}°C</h1>

        <p>{city.weather?.[0]?.description}</p>

        <div className="weather-info">
          <p>Umidità: {city.main?.humidity}%</p>
          <p>Vento: {city.wind?.speed} m/s</p>
          <p>Nuvolosità: {city.clouds?.all}%</p>
          <p>Percepita: {Math.round(city.main?.feels_like)}°C</p>
        </div>
      </div>
    </>
  );
}