const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5fd1f91d346d40de19dc065f7b7cf45f";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const description = jsObject.weather[0].description;
    document.getElementById('current').innerHTML = description;
    document.getElementById('temp').innerHTML = Math.round(jsObject.main.temp);
    document.getElementById('humidity').innerHTML = jsObject.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(jsObject.wind.speed);
  });

const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=5fd1f91d346d40de19dc065f7b7cf45f";

fetch(apiURLForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const data = jsObject.list.filter((element) => element.dt_txt.includes('18:00:00'));

    console.log(data);

    const dayOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let day = 0;
    data.forEach(item => {
      const temp = item.main.temp_max;
      const iconsrc = '//openweathermap.org/img/w/' + 
                            item.weather[0].icon + 
                            '.png';
      let date = new Date(item.dt_txt);
      document.getElementById('day' + (day + 1)).innerHTML = dayOfWeek[date.getDay()];
      document.getElementById('img' + (day + 1)).src = iconsrc;
      document.getElementById('temp' + (day + 1)).textContent = temp.toFixed(0) + ' °F';
      day++;
    });
  });