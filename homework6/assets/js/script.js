// define fetch parameters
// fetch is the link+city name, API KEY
// At the top we define API KEY with our personal API KEY (weatherAPIkey)
// let city name - do not define
// declare get weatherAPI function on event = getAPI(event) 
// 
const APIKey = "c3c213a42209904d63007619504fbde0";
let city;

const weatherOptions = {
  method: "GET",
  headers: {
    "Key": "c3c213a42209904d63007619504fbde0",
    "Host": "http://api.openweathermap.org",
  },
};

function getApi(event) {
  if (event.target.matches("button")) {
    city = document.getElementById("searchInput").value
    localStorage.setItem('searchInput', city)
    let queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    fetch(queryUrl, weatherOptions)
      .then(function (response) {
        return response.json();
        console.log(response)
      })
      .then(function (data) {
        let weatherData = data.coord.lon;
        console.log(weatherData);
      });
  }
};

button.addEventListener("click", getApi);


