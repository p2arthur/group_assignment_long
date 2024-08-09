import { fetchLocationWeather } from "../services/fetchLocationWeather.js";

const locations = [
  { name: "Second beach", lat: -135, long: 135 },
  { name: "Jericho beach" },
  {},
  {},
];

const location = { name: "Second beach", lat: -135, long: 135 };

const handlePlaceSelectSubmit = () => {
  fetchLocationWeather(location.lat, location.long);
};

export { handlePlaceSelectSubmit };
