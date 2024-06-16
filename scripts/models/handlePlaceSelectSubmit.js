import { fetchLocationWeather } from '../services/fetchLocationWeather.js';

const handlePlaceSelectSubmit = () => {
  fetchLocationWeather('49.27', '-123.13');
};

export { handlePlaceSelectSubmit };
