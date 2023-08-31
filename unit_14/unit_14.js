const apiKey = "46f4158489f8060c1bf148c2bcb9979a";
const url = "https://api.openweathermap.org/data/2.5/weather";
const cities = [
  { value: "2643743", name: "London" },
  { value: "2968815", name: "Paris" },
  { value: "703448", name: "Kyiv" },
  { value: "745044", name: "Istanbul" },
  { value: "3451189", name: "Rio de Janeiro" },
];

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
  const windDirectionElement = document.getElementById("wind-direction");
  const weatherIconElement = document.getElementById("weather-icon");
  const pressureElement = document.getElementById("pressure");

  const weatherIconId = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${weatherIconId}.png`;
  weatherIconElement.src = iconUrl;
  cityNameElement.textContent = data.name;
  temperatureElement.textContent = data.main.temp;
  weatherElement.textContent = data.weather[0].description;
  windSpeedElement.textContent = data.wind.speed;
  windDirectionElement.textContent = getWindDirectionDescription(data.wind.deg);
  pressureElement.textContent = data.main.pressure;
}

function getWindDirectionDescription(degrees) {
  if (degrees >= 337.5 || degrees < 22.5) {
    return "Северное";
  } else if (degrees >= 22.5 && degrees < 67.5) {
    return "Северо-восточное";
  } else if (degrees >= 67.5 && degrees < 112.5) {
    return "Восточное";
  } else if (degrees >= 112.5 && degrees < 157.5) {
    return "Юго-восточное";
  } else if (degrees >= 157.5 && degrees < 202.5) {
    return "Южное";
  } else if (degrees >= 202.5 && degrees < 247.5) {
    return "Юго-западное";
  } else if (degrees >= 247.5 && degrees < 292.5) {
    return "Западное";
  } else if (degrees >= 292.5 && degrees < 337.5) {
    return "Северо-западное";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById("city");

  cities.forEach((city) => {
    const optionElement = document.createElement("option");
    optionElement.value = city.value;
    optionElement.textContent = city.name;
    selectElement.appendChild(optionElement);
  });

  document.querySelector("#city").addEventListener("change", getWeather);
  getWeather();
});
