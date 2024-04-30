document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '0d1b47bcd0483aa2d7a49036f89c5a13';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not found.');
            }
            return response.json();
        })
        .then(data => displayWeatherData(data))
        .catch(error => console.error('Error:', error));
});

function displayWeatherData(data) {
    const { name, main, weather } = data;
    const resultDiv = document.getElementById('weatherResult');
    resultDiv.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].main}</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}
