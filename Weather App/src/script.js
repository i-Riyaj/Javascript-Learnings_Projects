
  const checkWeather = () => {
  const searchInput = document.querySelector("#searchInput");
  const weatherIcon = document.querySelector(".weatherIcon");

  if (searchInput.value.trim() !== "") {

    const apiKey = "e80be085fe5611f78afa036ec56b9e7b";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&APPID=${apiKey}`;

    const fetchWeather = async () => {
      try {
        const response = await fetch(apiUrl);
      const data = await response.json();

      document.querySelector(".displayTempareture").innerHTML = `${Math.round(
        data.main.temp
      )}°C`;
      document.querySelector(".displayLocation").innerHTML = data.name;
      document.querySelector(
        ".showHumidity"
      ).innerHTML = `${data.main.humidity}%`;
      document.querySelector(
        ".showWindSpeed"
      ).innerHTML = `${data.wind.speed} km/h`;

      switch (data.weather[0].main) {
        case "Clear":
          weatherIcon.src = "../assets/Images/clear.png";
          break;
        case "Rain":
          weatherIcon.src = "../assets/Images/rain.png";
          break;
        case "Clouds":
          weatherIcon.src = "../assets/Images/clouds.png";
          break;
          case "Drizzle":
          weatherIcon.src = "../assets/Images/drizzle.png";
          break;
          case "Snow":
          weatherIcon.src = "../assets/Images/snow.png";
          break;
        case "Haze":
          weatherIcon.src = "../assets/Images/mist.png";
          break;
        default:
          weatherIcon.src = "../assets/Images/clear.png";
          break;
      }
      
      document.querySelector('.weather').className = "weather";
      }
      catch(error){
        console.log(error);
        alert('something wrong!')
      }
    };
    fetchWeather();

    searchInput.value = "";
  } else {
    alert("Enter a location!");
  }
};

document.querySelector("#searchBtn").addEventListener("click", checkWeather);
