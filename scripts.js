const key = "f6a85c8d8fe0c9dfa2ccad3265c77cdb";

function displayCity(data) {
  document.querySelector(".city").innerHTML =
    "Tempo em " + data.name + ", " + data.sys.country;
  document.querySelector(".temp").innerHTML =
    "Temperatura: " + Math.floor(data.main.temp) + "°C";
  document.querySelector(".temp-min").innerHTML =
    "Mínima: " + Math.floor(data.main.temp_min) + "°C";
  document.querySelector(".temp-max").innerHTML =
    "Máxima: " + Math.floor(data.main.temp_max) + "°C";
  document.querySelector(".text-forecast").innerHTML =
    data.weather[0].description;
  document.querySelector(".text-humidity").innerHTML =
    "Umidade: " + data.main.humidity + "%";
  document.querySelector(
    ".img-temp"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function citySearch(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  displayCity(data);

  console.log(data);
}

function clickSearch() {
  const city = document.querySelector(".input-city").value;

  citySearch(city);

  document.querySelector(".input-city").value = "";
}
