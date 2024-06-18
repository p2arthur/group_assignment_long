function fillCities() {
    const selectOption = document.querySelector(".selectForm");
    const cities = ["CITY 1", "CITY 2", "CITY3"];
    cities.map(city => {
        let option = document.createElement("option");
        option.text = city;
        selectOption.appendChild(option);
    })
}
fillCities();