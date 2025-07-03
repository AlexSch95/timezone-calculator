const timeTranslation = [
    {countryId: "de", countryName: "Germany", timeZone: "CET", utcZone: "+01:00"},
    {countryId: "ch", countryName: "Switzerland", timeZone: "CET"},
]

function reset() {
    const selectedTimezone = document.getElementById("timezone-selector");
    const selectedCountry = document.getElementById("country-selector");
    const selectedDate = document.getElementById("date-selector");
    const selectedTime = document.getElementById("time-selector");
    toggleResultCard("hide");
    selectedTimezone.selectedIndex = 0;
    selectedCountry.selectedIndex = 0;
    selectedDate.value = "";
    selectedTime.value = "";
}

function calculate() {
    const resultCountry = document.getElementById("output-country");
    const resultTimezone = document.getElementById("output-timezone");
    const selectedDate = document.getElementById("date-selector").value;
    const selectedTime = document.getElementById("time-selector").value;
    console.log(selectedDate);
    console.log(selectedTime);
    let foundCountryInfo = getCountryInfo();
    resultCountry.textContent = foundCountryInfo.countryName;
    resultTimezone.innerHTML = `${foundCountryInfo.timeZone} (UTC ${foundCountryInfo.utcZone})`;
    toggleResultCard("show");
}

function getCountryInfo() {
    const selectedCountry = document.getElementById("country-selector");
    for (let i = 0; i < timeTranslation.length; i++) {
        if (timeTranslation[i].countryId === selectedCountry.value) {
            return timeTranslation[i];
        }
    }
}

function toggleResultCard(status) {
    const resultCard = document.getElementById("result-card");
    switch (status) {
        case "show":
            resultCard.classList.add("show");
            break;
        case "hide":
            resultCard.classList.remove("show");
            break;
    }
}