import { fetchLocationWeather } from "../services/fetchLocationWeather.js";

const handlePlaceSelectSubmit = async (location) => {
  const data = await fetchLocationWeather(location.lat, location.long);
  return data;
};

export { handlePlaceSelectSubmit };
