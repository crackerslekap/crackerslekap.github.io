const search = document.getElementById("search");
const button = document.getElementById("outter-button");
const span = document.getElementById("unit");

const apiData = {   
    key: config.key,
    url: 'https://api.openweathermap.org/data/2.5/'
}

button.addEventListener('click', function() {
    if("Celsius" == span.innerHTML) {
        span.innerHTML = "Fahrenheit";
    } else {
        span.innerHTML = "Celsius";
    }
}, false);

search.addEventListener('keypress', setCity);
function setCity(event) {
    if(event.keyCode == 13) {
        getResults(search.value);
    }
}

function getResults(city) {
    if("Celsius" == span.innerHTML) {
        fetch(`${apiData.url}weather?q=${city}&units=metric&APPID=${apiData.key}`).then(weather => {
            return weather.json();
        }).then(display);
    } else {
        fetch(`${apiData.url}weather?q=${city}&units=imperial&APPID=${apiData.key}`).then(weather => {
            return weather.json();
        }).then(display); 
    }
}

function display (weather) {
    let loc = document.getElementById('loc');
    let temp = document.getElementById('temp');
    let feels = document.getElementById('feels');
    let dog = document.getElementById('date');
    let weatherElement = document.getElementById("weather");
    let highlow = document.getElementById("hi-low");

    loc.innerText = `${weather.name},  ${weather.sys.country}`;
    highlow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
    feels.innerHTML = `Feels Like ${Math.round(weather.main.feels_like)}<span>°C</span>`
    weatherElement.innerText = weather.weather[0].main;
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var d = new Date();
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let final = days[day] + " " + date + " " + months[month] + " " + year;
    dog.innerText = final;
}


