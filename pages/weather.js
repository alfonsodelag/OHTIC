import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

const date = new Date();
const timestamp = date.getTime();
const todaysDate = new Date(timestamp);
const esDate = new Intl.DateTimeFormat("es", {
  dateStyle: "long",
  timeStyle: "medium",
}).format(todaysDate);

const Weather = () => {
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      await axios
        .get(
          "https://openweathermap.org/data/2.5/onecall?lat=40.4165&lon=-3.7026&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02"
        )
        .then((response) => {
          setWeatherData(response.data);
        });
    };
    fetchWeatherData();
  }, []);

  const currentWeather = weatherData?.current;
  const dailyWeather = weatherData?.daily;

  return (
    <div className="p-5 w-full md:w-3/5">
      <Head>
        <title>Weather</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="flex flex-col justify-between mt-8">
        <h1>Madrid, ES</h1>
        <div className="flex gap-10 items-center">
          <p>{currentWeather?.weather[0]?.description},</p>
          <p>{currentWeather?.temp}°C</p>
        </div>
        <div>
          <div className="flex gap-10 items-center">
            <p>Humedad: {currentWeather?.humidity}%</p>
            <p>UV: {currentWeather?.uvi}</p>
          </div>
        </div>
      </section>
      <section className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 gap-4 my-8">
        {dailyWeather &&
          dailyWeather.map((weather) => (
            <div
              style={{ border: "0.5px solid #D2D1CD" }}
              className="rounded-2xl bg-white"
              key={weather.dt}
            >
              <div className="p-3">
                <img
                  src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                />
                <p>
                  {new Intl.DateTimeFormat("es", { dateStyle: "long" }).format(
                    weather.dt * 1000
                  )}
                </p>
                <p>Temperatura: {weather?.temp.day}°C</p>
              </div>
              <div className="mx-auto p-3 mb-2 bg-white">
                <p>Humedad: {weather?.humidity}%</p>
                <p>UV: {weather?.uvi}</p>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Weather;
