const heading3 = document.querySelector("#heading3");
const userInput = document.querySelector("#userInput");
const searchBtn = document.querySelector("#searchBtn");
const backBtn = document.querySelector("#backBtn");
const form = document.querySelector("#form");
const mainDiv = document.querySelector("#mainDiv");
const windSpeed = document.querySelector("#windSpeed");
const pressure = document.querySelector("#pressure");
const humidity = document.querySelector("#humidity");
const feelsLike = document.querySelector("#feelsLike");
const tempData = document.querySelector("#tempData");
const cityData = document.querySelector("#cityData");

let cityName = "";

const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3ca41a078e3e15869ced3d9f74d2d83e`;

// API: https://api.openweathermap.org/data/2.5/weather?q=Bhiwani&units=metric&appid=3ca41a078e3e15869ced3d9f74d2d83e

async function getLatestWeather(cityName) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3ca41a078e3e15869ced3d9f74d2d83e`;
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
  cityData.textContent = `City Name: ${data.name}`;
  tempData.textContent = `Temprature: ${data.main.temp}`;
  feelsLike.textContent = `Feels Like: ${data.main.feels_like}`;
  pressure.textContent = `Pressure: ${data.main.pressure}`;
  humidity.textContent = `Humidity: ${data.main.humidity}`;
  windSpeed.textContent = `Wind Speed: ${data.wind.speed}`;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  cityName = userInput.value.trim();
  if (!cityName) {
    alert("Kindly Enter Proper Value");
  } else {
  }
  getLatestWeather(cityName);
  console.log(cityName);
  mainDiv.classList.add("hidden");
  unhideDiv.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  mainDiv.classList.remove("hidden");
  unhideDiv.classList.add("hidden");
});
