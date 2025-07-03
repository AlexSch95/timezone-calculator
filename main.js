function reset() {
    let selectedTimezone = document.getElementById("timezone-selector");
    let selectedCountry = document.getElementById("country-selector");
    let resultCard = document.getElementById("result-card");
    resultCard.classList.add("visually-hidden");
    selectedTimezone.selectedIndex = 0;
    selectedCountry.selectedIndex = 0;
}

function calculate() {
    let resultCard = document.getElementById("result-card");
    resultCard.classList.remove("visually-hidden");
}