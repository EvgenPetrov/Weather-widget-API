const apiKey = "46f4158489f8060c1bf148c2bcb9979a";
const url = "https://api.openweathermap.org/data/2.5/weather";

function getWeather() {
  const cityId = document.querySelector("#city").value;

  fetch(`${url}?id=${cityId}&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => showWeather(data));
}

function showWeather(data) {
  const cityNameElement = document.getElementById("city-name");
  const temperatureElement = document.getElementById("temperature");
  const weatherElement = document.getElementById("weather");
  const windSpeedElement = document.getElementById("wind-speed");
  const humidityElement = document.getElementById("humidity");
  const pressureElement = document.getElementById("pressure");

  cityNameElement.textContent = data.name;
  temperatureElement.textContent = data.main.temp;
  weatherElement.textContent = data.weather[0].description;
  windSpeedElement.textContent = data.wind.speed;
  humidityElement.textContent = data.main.humidity;
  pressureElement.textContent = data.main.pressure;
}

document.querySelector("#city").addEventListener("change", getWeather);
getWeather();
