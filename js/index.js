const date = document.querySelector("#date");
const temp = document.querySelector("#temp-main");
const tempMin = document.querySelector("#temp-min");
const tempMax = document.querySelector("#temp-max");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const desc = document.querySelector("#desc");
const feelsLike = document.querySelector("#feelslike");
const search = document.querySelector("#search");
const searchBar = document.querySelector("#search-bar");
const searchInput = document.querySelector("#search-input");
const header = document.querySelector("#header");
const miasto = document.querySelector("#city");
const currentDate = new Date();

const apiKey = "8cf93e93878ce8ff7d182b868c641dc9";

date.innerHTML = currentDate.toLocaleDateString();

function convert(temp) {
  return temp.toFixed();
}

searchInput.onkeydown = (e) => {
  if (e.key == "Enter") Search();
};

function Search() {
  const city = searchInput.value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      miasto.innerHTML = city;
      temp.innerHTML = convert(data.main.temp) + "°";
      tempMin.innerHTML = convert(data.main.temp_min) + "°";
      tempMax.innerHTML = convert(data.main.temp_max) + "°";
      desc.innerHTML = data.weather[0].description;
      feelsLike.innerHTML = "Odczuwalna " + convert(data.main.feels_like) + "°";
      header.classList.toggle("hidden");
      searchBar.classList.toggle("hidden");
      max.classList.remove("hidden");
      min.classList.remove("hidden");
      searchInput.value = "";
      console.log(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function ShowHide() {
  header.classList.toggle("hidden");
  searchBar.classList.toggle("hidden");
}

search.onclick = ShowHide;
