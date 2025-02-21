const apiKey = "38cda4162fa2e98bd919d305bb31816a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input"); //Selects the input field from the search class
const searchButton = document.querySelector(".search button"); //Selects the button from the search class

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    //Insert value from API call onto the HTML
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

//If search button is clicked, add city name to API call
searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

