import { locations } from "../../locationData.js";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("submit-button");
  const selectorElement = document.getElementById("places-list-selector");
  locations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location.name;
    option.textContent = location.name;
    selectorElement.appendChild(option);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const userSelectedValue = selectorElement.value;

    const selectedLocation = locations.find(
      (location) => location.name === userSelectedValue
    );

    if (selectedLocation) {
      sessionStorage.setItem(
        "selectedLocation",
        JSON.stringify(selectedLocation)
      );

      window.location.href = "/overview";
    } else {
      console.error("Location not found");
    }
  };

  button.addEventListener("click", handleSubmit);
});
