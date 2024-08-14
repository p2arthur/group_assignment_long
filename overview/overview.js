import { handlePlaceSelectSubmit } from "../scripts/models/handlePlaceSelectSubmit.js";

document.addEventListener("DOMContentLoaded", async () => {
  const titleElement = document.getElementsByClassName("place-name")[0];
  const weatherStats1 = document.getElementById("weather-stats-1");
  const weatherStats2 = document.getElementById("weather-stats-2");
  const weatherStats3 = document.getElementById("weather-stats-3");
  const locationVideo = document.getElementById("location-video");
  const weatherStats4 = document.getElementById("weather-stats-4");
  const weatherStats5 = document.getElementById("weather-stats-5");
  const weatherStats6 = document.getElementById("weather-stats-6");
  let cloth_1 = document.getElementById("recomendation-1")
  let cloth_2 = document.getElementById("recomendation-2")
  let cloth_3 = document.getElementById("recomendation-3")

  console.log("something");

  const selectedLocation = JSON.parse(
    sessionStorage.getItem("selectedLocation")
  );

  if (selectedLocation) {
    const weatherData = await handlePlaceSelectSubmit(
      selectedLocation.location
    );

    console.log("weaterData", weatherData);

    titleElement.textContent = selectedLocation.name;
    weatherStats1.textContent = `🌡️ ${weatherData.current.apparent_temperature}°C`;
    weatherStats2.textContent = `💨 ${weatherData.current.wind_speed_10m} KM/H`;
    weatherStats3.textContent = `☁️ ${weatherData.current.cloud_cover}`;
    weatherStats4.textContent = `☔ ${weatherData.current.rain}`;
    weatherStats5.textContent = `⌚ ${weatherData.current.time}`;
    weatherStats6.textContent = `💧 ${weatherData.current.relative_humidity_2m}`;
    locationVideo.setAttribute("src", selectedLocation.video_url);

    if  (weatherData.current.apparent_temperature < 10 && weatherData.current.rain <= 0){
      cloth_1.textContent = '🧤';
      cloth_2.textContent = '🧣';
      cloth_3.textContent = '🧥';
     } else if (weatherData.current.apparent_temperature < 0 && weatherData.current.rain > 0) {
      cloth_1.textContent = '🧤';
      cloth_2.textContent = '☂️';
      cloth_3.textContent = '🧥';
     } else if (weatherData.current.apparent_temperature > 0 && weatherData.current.rain > 0) {
      cloth_1.textContent = '👖';
      cloth_2.textContent = '☂️';
      cloth_3.textContent = '🧥';
     } else if (weatherData.current.apparent_temperature > 0 && weatherData.current.rain <= 0) {
      cloth_1.textContent = '👖';
      cloth_2.textContent = '👕';
      cloth_3.textContent = '🧦';
     }else if (weatherData.current.apparent_temperature > 20 && weatherData.current.rain < 0 && weatherData.current.cloud_cover == 0) {
      cloth_1.textContent = '👕';
      cloth_2.textContent = '🩳';
      cloth_3.textContent = '🧢 🕶️';
     } else if (weatherData.current.apparent_temperature > 15 && weatherData.current.rain < 0 && weatherData.current.cloud_cover > 0) {
      cloth_1.textContent = '👕';
      cloth_2.textContent = '🧥';
      cloth_3.textContent = '👖';
     }else { 
      cloth_1.textContent = '👖';
      cloth_2.textContent = '👕';
      cloth_3.textContent = '🧥';
     }
  } else {
    console.error("No location data found in sessionStorage");
  }
});