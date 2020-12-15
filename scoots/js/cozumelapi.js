const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=5fd1f91d346d40de19dc065f7b7cf45f";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const description = jsObject.weather[0].description;
    document.getElementById("current").innerHTML = description;
    document.getElementById("temp").innerHTML = Math.round(jsObject.main.temp);
    document.getElementById("humidity").innerHTML = jsObject.main.humidity;
    document.getElementById("windspeed").innerHTML = Math.round(jsObject.wind.speed);
  });

const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=5fd1f91d346d40de19dc065f7b7cf45f";

fetch(apiURLForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const dayHeadings = document.querySelectorAll("#days");
    const temps = document.querySelectorAll("#temps");
    const imgs = document.querySelectorAll("#imgs");

    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

    let day = 0;
    for (item of jsObject.list) {
      if (item.dt_txt.includes("18:00:00")) {
        const date = new Date(item.dt * 1000).getDay();
        const iconsrc = "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
        const temp = item.main.temp_max;

        dayHeadings[day].innerHTML = dayOfWeek[date];
        temps[day].innerHTML = temp.toFixed(0);
        imgs[day].setAttribute("src", iconsrc);

        day++;
      }
    }
  });