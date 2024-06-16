import { handlePlaceSelectSubmit } from './models/handlePlaceSelectSubmit.js';

const button = window.document.getElementById('submit-button');

const handleSubmit = (event) => {
  event.preventDefault();
  handlePlaceSelectSubmit();
};

button.addEventListener('click', handleSubmit);
