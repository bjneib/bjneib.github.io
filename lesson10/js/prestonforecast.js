const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=5fd1f91d346d40de19dc065f7b7cf45f";

fetch(apiURLForecast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

	console.log(forecastData);

	const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let day = 0;
	forecastData.forEach(forecast => {
	  let x = new Date(forecast.dt_txt);
    document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
    document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
    document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
	document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
	day++;	  
	});
});