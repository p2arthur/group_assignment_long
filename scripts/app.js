import { handlePlaceSelectSubmit } from './models/handlePlaceSelectSubmit.js';

const button = window.document.getElementById('submit-button');

const handleSubmit = (event) => {
  event.preventDefault();
  handlePlaceSelectSubmit();
  window.location.href = '/overview';
};

button.addEventListener('click', handleSubmit);
