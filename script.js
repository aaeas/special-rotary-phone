// console.log(secretKeys);
let apiKey = secretKeys.APIkey;

let weather = {
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        // console.log(humidity);
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

weather.fetchWeather("Denver");


// let lat;  // ?
// let lon;  // ?
// let displayWeather;


// // Denver CO - 39.7392° N, 104.9903° W


// // this method will be called when we enter our search city.

// function fetchWeather() {
//     let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`;
//     console.log("making second request");
//     // Here we make our Ascynchronous call to the API 
//     fetch(apiURL)
//         .then((response) => response.json())
//         .then((data) => this.displayWeather(data));
//     {
//         console.log("We Got Data!!");


//     }

// }
// // if you need to make a second API call WITH DATA from the first API call, be careful WHERE you make that call!!!


// // code here will run immediately after the the fetch is called, (but not before it has returned data!!)
// console.log("I ran after fetch was invoked ...")
// };


// let cityName = "Denver"
// let geoAPIurl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIkey}`

// function geocodingAPI() {
//     fetch(geoAPIurl)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("We Got Data!!");
//             console.log(data)

//             console.log(data[0].country);
//             console.log(data[0].name);
//             // update values
//             lat = data[0].lat;
//             lon = data[0].lon;
//             // if you need to make a second API call WITH DATA from the first API call, be careful WHERE you make that call!!!
//             fetchWeather();

//         });
// }

// // this function will be called on button click
// geocodingAPI();