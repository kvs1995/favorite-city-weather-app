/*
0) Link javascript file to html
*/



//1) get access to the input field
var inputField = document.querySelector('#city')  


//2) get access to the button
var button = document.querySelector('#get-weather')


//3) create funtion to fetch api data when button is clicked
function fetchData() {
    console.log(inputField.value)
    var cityName = inputField.value
    var apiKey = '410bf7cb489396d2d3451160359de4e0'
    var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    console.log(requestURL)

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (weatherData) {
        console.log(weatherData);
    })
}

button.addEventListener('click', fetchData)


