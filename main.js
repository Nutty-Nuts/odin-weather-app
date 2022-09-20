const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");

const city = document.getElementById("city");
const weather = document.getElementById("weather");

const key = config.SECRET_KEY;

var latVal = 0;
var longVal = 0;

const submit = document.getElementById("submit-data");
submit.addEventListener("click", () => {
    latVal = latitude.value;
    longVal = longitude.value;

    getWeather(latVal, longVal);

    console.log(latVal, longVal);
});

async function getWeather(lat, long) {
    const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`,
        { mode: "cors" }
    );

    const weatherData = await weatherResponse.json();

    console.log(weatherData);

    city.innerHTML = weatherData.name;
    weather.innerHTML = weatherData.weather[0].main;
}
