const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
  
   for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
      let card = document.createElement('section');
      
      let name = document.createElement('h2');
      name.textContent = towns[i].name;

      let motto = document.createElement('h4');
      motto.textContent = towns[i].motto;

      let image = document.createElement('img');
      image.setAttribute('src', 'images/' + towns[i].photo);
      image.setAttribute('alt', towns[i].name);

      let yearFounded = document.createElement('p');
      yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;

      let currentPopulation = document.createElement('p');
      currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;

      let averageRainfall = document.createElement('p');
      averageRainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + ' ' + 'in.';

      let info = document.createElement('div');

      info.setAttribute('id', 'info');

      card.appendChild(info);
      card.appendChild(image);
      info.appendChild(name);
      info.appendChild(motto);
      info.appendChild(yearFounded);
      info.appendChild(currentPopulation);
      info.appendChild(averageRainfall);
      document.querySelector('div.cards').appendChild(card);
      }
   }
});