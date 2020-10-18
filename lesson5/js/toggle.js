function toggle() {
  var x = document.getElementById("my-navigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

var d = new Date();
var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday");
var monthname = new Array("January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December");
var output = weekday[d.getDay()] + ", " + monthname[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
document.getElementById("lastUpdate").innerText = output;

if (d.getDay() == 5) {
  document.getElementById("banner").style.display = "block";
}