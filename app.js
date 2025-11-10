document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '4fd39641c957264702288470cbc20738'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => { 
            document.getElementById('weather-result').innerText = `Weather in ${data.name}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
        })
        .catch(error => {
            document.getElementById('weather-result').innerText = 'Error fetching weather data.';
            console.error('Error:', error);
        });
});
