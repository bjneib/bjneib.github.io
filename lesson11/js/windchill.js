var temp = document.querySelector("#temp").innerHTML;
var windspeed = document.querySelector("#windspeed").innerHTML;

var f = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16)));

if (temp > 50 && windspeed > 3) {
    document.querySelector("#windchill").innerHTML = "N/A";
} else {
    document.querySelector("#windchill").innerHTML = f;
}