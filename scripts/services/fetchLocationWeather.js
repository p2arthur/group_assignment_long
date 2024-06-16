const fetchLocationWeather = async (lat, lng) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/gem?latitude=${lat}2&longitude=${lng}1&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,snowfall,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&forecast_days=1`
  );

  console.log('req data', await response.json());
};

export { fetchLocationWeather };
