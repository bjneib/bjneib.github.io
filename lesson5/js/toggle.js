function toggle() {
  var x = document.getElementById("my-navigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

function todaysDate() {
  var d=new Date()
  var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
  var monthname=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
      document.write(weekday[d.getDay()] + ", ")
      document.write(monthname[d.getMonth()] + " ")
      document.write(d.getDate() + ", ")
      document.write(d.getFullYear())
}