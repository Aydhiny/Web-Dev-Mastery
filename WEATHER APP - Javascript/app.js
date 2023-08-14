const apiKey = 'f0697e911dedf022055d0f576a109766';
const inputVal = 'Kakanj, BA';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

const locationElement = document.querySelector('.location-timezone');
const temperatureDegreeElement = document.querySelector('.temperature-degree');
const temperatureDescriptionElement = document.querySelector('.temperature-description');
const iconElement = document.querySelector('.fa-cloud');
const resetButton = document.querySelector('.btn');

// Add event listener to reset button
resetButton.addEventListener('click', () => {
  locationElement.textContent = 'Sarajevo';
  temperatureDegreeElement.textContent = '34';
  temperatureDescriptionElement.textContent = "It's really hot today!";
  iconElement.className = 'fa-solid fa-cloud';
});

// Construct the URL with parameters and the API key
const exampleLocation = 'Sarajevo'; // Example location
const url = `${apiUrl}&q=${exampleLocation}&days=1`;

// Make the API request using fetch
function fetching() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Process the API response data
        const weather = data.main;
    
        locationElement.textContent = data.name;
        temperatureDegreeElement.textContent = weather.temp;
        temperatureDescriptionElement.textContent = data.weather[0].description;
    
        // Change the weather icon based on condition (adjust this according to API response)
        if (data.weather[0].id === 800) {
          iconElement.className = 'fa-solid fa-sun';
        } else {
          iconElement.className = 'fa-solid fa-cloud';
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}
fetching();