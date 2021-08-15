function displayTemperature(response) {
  console.log(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElemnt = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElemnt.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "b0f53c0693e9322889a32ea02b229166";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
