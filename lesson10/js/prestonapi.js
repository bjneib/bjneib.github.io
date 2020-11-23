const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5fd1f91d346d40de19dc065f7b7cf45f";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const description = jsObject.weather[0].description;
    document.getElementById('current').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('temp').innerHTML = Math.round(jsObject.main.temp);
    document.getElementById('humidity').innerHTML = jsObject.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(jsObject.wind.speed);
});
