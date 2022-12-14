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
    "Host": "https://api.openweathermap.org",
  },
};

function getApi(event) {
  event.preventDefault()
  if (event.target.matches("button")) {
    city = document.getElementById("searchInput").value
    localStorage.setItem('searchInput', city)
    let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    fetch(queryUrl)
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        let temperature = data.main.temp;
        let humidity = data.main.humidity;
        let wind = data.wind.speed
        let icon = data.weather[0].icon
        console.log(lat);
        console.log(lon);
        console.log(temperature);
        console.log(humidity);
        console.log(wind);
        console.log(icon);
        let latEl = document.createElement("p");
        latEl.textContent = "Latitude: " + lat;
        forecast.appendChild(latEl);
        let lotEl = document.createElement("p");
        lotEl.textContent = "Longitude: " + lon;
        forecast.appendChild(lotEl);
        let tempEl = document.createElement("p");
        tempEl.textContent = "Temperature: " + temperature;
        forecast.appendChild(tempEl);
        let humidityEl = document.createElement("p");
        humidityEl.textContent = "Humidity: " + humidity;
        forecast.appendChild(humidityEl);
        let windEl = document.createElement("p");
        windEl.textContent = "Wind: " + wind;
        forecast.appendChild(windEl);
        // let iconEl = document.createElement("p");
        // iconEl.textContent = icon;
        // forecast.appendChild(iconEl);
      });
  }
};



button.addEventListener("click", getApi);


