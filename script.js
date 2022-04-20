function searchForCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-name");
  let h1=document.querySelector("h1");
  h1.innerHTML =  cityInput.value;
  let city = cityInput.value;
  let apiKey = "5569faf92417631e8d5bf083852d65c1";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";



  function showTemperature(response) {
      let temperature = Math.round(response.data.main.temp);
      let temperatureElement = document.querySelector("#id_temp");
      temperatureElement.innerHTML = `${temperature}°C`;
  }
  axios.get(apiUrl + "q=" + city + "&units=metric&appid=" + apiKey).then(showTemperature);


}
let form = document.querySelector("#searchCity");
form.addEventListener("submit", searchForCity);


let now = new Date;
let h2 = document.querySelector("h2");
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
hours = "0"+hours;
}
let minutes = now.getMinutes();
if (minutes < 10) {
minutes = "0"+minutes;
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday"];
let day = days[now.getDay()];

h2.innerHTML = day + " , " + hours + ":" + minutes;




function showPosition(position) {
let h1 = document.querySelector("h1");
h1.innerHTML = `Your latitude is ${position.coords.latitude} and 
your longitude is ${position.coords.latitude}`;
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);