window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = 'https://us-weather-by-city.p.rapidapi.com/getweather?city=San%20Francisco&state=CA';
        });
     
    }
});