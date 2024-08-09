import { handlePlaceSelectSubmit } from "./models/handlePlaceSelectSubmit.js";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("submit-button");
  const userSelector = document.getElementById("places-list-selector");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userSelectedValue = userSelector.value;
    console.log("userSelected value", userSelectedValue);
    handlePlaceSelectSubmit(userSelectedValue);
  };

  button.addEventListener("click", handleSubmit);
});
