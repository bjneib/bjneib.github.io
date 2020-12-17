const urlRequest = "https://bjneib.github.io/rentals.json";

fetch(urlRequest)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const table = jsonObject['rentals'];

      const persons = document.querySelectorAll(".persons");
      const halfRes = document.querySelectorAll(".halfRes");
      const fullRes = document.querySelectorAll(".fullRes");
      const halfWalk = document.querySelectorAll(".halfWalk");
      const fullWalk = document.querySelectorAll(".fullWalk");

      let row = 0;

      persons[row].innerHTML = 
      halfRes[row].innerHTML = halfRes

      row++;
   });