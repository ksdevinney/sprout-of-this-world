$(document).ready(function(){
    const searchForm = $("#search-form");
    const currentWeatherContainer = $("#current-weather");
    // const apiKey = ""; openweather api 
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
    const iconBaseUrl = "http://openweathermap.org/img/w/"
    const searchValueInput = $("#search-value");
    
    // search for a location
    searchForm.submit(function(event) {
        event.preventDefault();
        const formValues = $(this).serializeArray();
        const city = formValues[0].value;
        searchForCurrentCityWeather(city);
        searchValueInput.val("");
      });
    function searchForCurrentCityWeather(city) {
        // dateContainer.text(moment().format("dddd, MMMM Do, YYYY"));
        currentWeatherContainer.html("");
        const fullUrl = baseUrl + "q=" + city + "&units=imperial" + "&appid=" + apiKey;
        console.log(fullUrl);
        fetch(fullUrl).then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const weather = data.weather;
                const cityName = data.name;
                const iconUrl = iconBaseUrl + weather[0].icon + ".png";
                const weatherDiv = $('<img class="icon-name">');

                weatherDiv.attr("src" , iconUrl);
                currentWeatherContainer.append(weatherDiv);
            });
    };
});