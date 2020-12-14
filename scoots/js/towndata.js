const requestURL = 'https://bjneib.github.io/rentals.json';
fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['rentals'];
  
   for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Scooters" || towns[i].name == "ATV's" || towns[i].name == "Jeeps") {
      let card = document.createElement('section');

      let name = document.createElement('h2');
      name.textContent = towns[i].name;

      let motto = document.createElement('h4');
      motto.textContent = towns[i].motto;

      let image = document.createElement('img');
      image.setAttribute('src', 'images/' + towns[i].photo);
      image.setAttribute('alt', towns[i].name);

      let averagePrice = document.createElement('p');
      averagePrice.textContent = 'Average Price: ' + towns[i].averagePrice;

      let available = document.createElement('p');
      available.textContent = 'Vehicles Available: ' + towns[i].available;

      let seats = document.createElement('p');
      seats.textContent = 'Seats: ' + towns[i].seats + ' ' + 'people';

      let info = document.createElement('div');

      info.setAttribute('id', 'info');

      card.appendChild(info);
      card.appendChild(image);
      info.appendChild(name);
      info.appendChild(motto);
      info.appendChild(averagePrice);
      info.appendChild(available);
      info.appendChild(seats);
      document.querySelector('div.cards').appendChild(card);
      }
   }
});