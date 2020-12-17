const urlRequest = "https://bjneib.github.io/rentals.json";

fetch(urlRequest)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   console.table(jsonObject);  // temporary checking for valid response and data parsing
   const table = jsonObject['rentals'];
  
});
