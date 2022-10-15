let now = new Date();
let span = document.querySelector("#today");
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
span.innerHTML = `${day} ${hours}:${minutes}`;

function showCity(event) {
  event.preventDefault();

  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${city.value}`;
  let apiKey = "667d9f573c8af4c33457be5d561a9148";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey} `).then(showTemperature);
}

function showTemperature(response) {
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = `${response.data.main.temp} °C`;
}
let city = document.querySelector("#city-name");

let searchCity = document.querySelector("#enter-city");
searchCity.addEventListener("submit", showCity);
