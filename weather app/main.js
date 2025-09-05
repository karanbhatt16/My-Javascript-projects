// api key and url
const apiKey = "8332d65715b4ec28561f167db17ebc1b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

if(localStorage.getItem("city") != null){
    checkWeather(localStorage.getItem("city"));
}

// functionality for cross
const cross = document.querySelector(".cross");
cross.addEventListener("click", ()=>{
    document.querySelector(".error").classList.remove("show");
    document.querySelector(".error").classList.add("hide");
});

// taking input from input field when enter is pressed
const input = document.querySelector(".Weather-input");
input.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        const city = input.value;
        saveData(city);
        input.value = "";
        if (city !== "") {
        checkWeather(city);
        }
    }
});

function saveData(city){
    localStorage.setItem("city",city);
}

// this function fetch weather from api
async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}`);
    var data = await response.json();
    if(data.name === undefined){
        document.querySelector(".error").classList.remove("hide");
        document.querySelector(".error").classList.add("show");
    } else{
        document.querySelector(".city").innerHTML = data.name;
    }
    document.querySelector(".temp").innerHTML = data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML = `<img src="images/humidity.png" alt="humidity" />
          <div class="text">
            <p>${data.main.humidity}%</p>
            <p>Humidity</p>
          </div>`;
    document.querySelector(".wind").innerHTML = `<img src="images/wind.png" alt="wind" />
          <div class="text">
            <p>${data.wind.speed} km/h</p>
            <p>Wind Speed</p>
          </div>`;
    if(data.weather[0].main == "Clouds"){
        const video = document.querySelector("#backgroundVideo");
        video.querySelector("source").src = `videos/clouds.mp4`;
        video.load();
        video.play();
        document.querySelector("#videoOverlay").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    } else if(data.weather[0].main == "Clear"){
        const video = document.querySelector("#backgroundVideo");
        video.querySelector("source").src = `videos/clear.mp4`;
        video.load();
        video.play();
        document.querySelector("#videoOverlay").style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    } else if(data.weather[0].main == "Rain"){
        const video = document.querySelector("#backgroundVideo");
        video.querySelector("source").src = `videos/rain.mp4`;
        video.load();
        video.play();
        document.querySelector("#videoOverlay").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    document.querySelector(".weather-icon").src = `images/${data.weather[0].main}.png`;
}
