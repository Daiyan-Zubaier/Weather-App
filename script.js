const apiKey = "38cda4162fa2e98bd919d305bb31816a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");          //Selects the input field from the search class
const searchButton = document.querySelector(".search button");      //Selects the button from the search class
const weatherIcon = document.querySelector(".weather-icon");        //Selects the weather icon from the weather-icon class

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    //If city is not found, display error message
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
        displayWeather(data);
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    
}

//If search button is clicked, add city name to API call
searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

function displayWeather(data){
    console.log(data);

    //Insert value from API call onto the HTML
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    //Change weather icon based on weather description
    if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    } 
    else if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } 
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    } 
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    } 
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";

}