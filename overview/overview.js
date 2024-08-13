import { handlePlaceSelectSubmit } from "../scripts/models/handlePlaceSelectSubmit.js";

document.addEventListener("DOMContentLoaded", async () => {
  const titleElement = document.getElementsByClassName("place-name")[0];
  const weatherStats1 = document.getElementById("weather-stats-1");
  const weatherStats2 = document.getElementById("weather-stats-2");
  const locationVideo = document.getElementById("location-video");

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
    weatherStats1.textContent = `${weatherData.current.apparent_temperature}°C`;
    weatherStats2.textContent = `${weatherData.current.wind_speed_10m}KM/H`;
    locationVideo.setAttribute("src", selectedLocation.video_url);
  } else {
    console.error("No location data found in sessionStorage");
  }
});
