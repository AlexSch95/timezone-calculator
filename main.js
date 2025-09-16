const { DateTime } = luxon;

// const timeTranslation = [
//   {timeZoneName: "Europe/Berlin", timeZone: "CET/CEST", country: "Germany"},
//   {timeZoneName: "Europe/Paris", timeZone: "CET/CEST", country: "France"},
//   {timeZoneName: "Europe/Rome", timeZone: "CET/CEST", country: "Italy"},
//   {timeZoneName: "Europe/Madrid", timeZone: "CET/CEST", country: "Spain"},
//   {timeZoneName: "Europe/Lisbon", timeZone: "WET/WEST", country: "Portugal"},
//   {timeZoneName: "Europe/London", timeZone: "GMT/BST", country: "United Kingdom"},
//   {timeZoneName: "Europe/Dublin", timeZone: "GMT/IST", country: "Ireland"},
//   {timeZoneName: "Europe/Amsterdam", timeZone: "CET/CEST", country: "Netherlands"},
//   {timeZoneName: "Europe/Brussels", timeZone: "CET/CEST", country: "Belgium"},
//   {timeZoneName: "Europe/Vienna", timeZone: "CET/CEST", country: "Austria"},
//   {timeZoneName: "Europe/Zurich", timeZone: "CET/CEST", country: "Switzerland"},
//   {timeZoneName: "Europe/Stockholm", timeZone: "CET/CEST", country: "Sweden"},
//   {timeZoneName: "Europe/Oslo", timeZone: "CET/CEST", country: "Norway"},
//   {timeZoneName: "Europe/Copenhagen", timeZone: "CET/CEST", country: "Denmark"},
//   {timeZoneName: "Europe/Helsinki", timeZone: "EET/EEST", country: "Finland"},
//   {timeZoneName: "Europe/Tallinn", timeZone: "EET/EEST", country: "Estonia"},
//   {timeZoneName: "Europe/Riga", timeZone: "EET/EEST", country: "Latvia"},
//   {timeZoneName: "Europe/Vilnius", timeZone: "EET/EEST", country: "Lithuania"},
//   {timeZoneName: "Europe/Warsaw", timeZone: "CET/CEST", country: "Poland"},
//   {timeZoneName: "Europe/Prague", timeZone: "CET/CEST", country: "Czech Republic"},
//   {timeZoneName: "Europe/Budapest", timeZone: "CET/CEST", country: "Hungary"},
//   {timeZoneName: "Europe/Bratislava", timeZone: "CET/CEST", country: "Slovakia"},
//   {timeZoneName: "Europe/Belgrade", timeZone: "CET/CEST", country: "Serbia"},
//   {timeZoneName: "Europe/Zagreb", timeZone: "CET/CEST", country: "Croatia"},
//   {timeZoneName: "Europe/Sofia", timeZone: "EET/EEST", country: "Bulgaria"},
//   {timeZoneName: "Europe/Bucharest", timeZone: "EET/EEST", country: "Romania"},
//   {timeZoneName: "Europe/Athens", timeZone: "EET/EEST", country: "Greece"},
//   {timeZoneName: "Europe/Istanbul", timeZone: "TRT", country: "Turkey"},
//   {timeZoneName: "Europe/Moscow", timeZone: "MSK", country: "Russia (Western)"},
//   {timeZoneName: "Europe/Kiev", timeZone: "EET/EEST", country: "Ukraine"},
//   {timeZoneName: "Europe/Minsk", timeZone: "MSK", country: "Belarus"},
// ];


function reset() {
    const selectedTimezone = document.getElementById("timezone-selector");
    const selectedCountry = document.getElementById("country-selector");
    const selectedDateTime = document.getElementById("datetime-selector");
    const resultCountry = document.getElementById("output-country");
    const resultTimezone = document.getElementById("output-timezone");
    const resultTimeDisplay = document.getElementById("time-output");

    toggleResultCard("hide");
    selectedTimezone.selectedIndex = 0;
    selectedCountry.selectedIndex = 0;
    selectedDateTime.value = "";
    resultCountry.textContent = "";
    resultTimezone.textContent = "";
    resultTimeDisplay.textContent = "";

}

function displayResults(resultTime) {
    const resultCountry = document.getElementById("output-country");
    const resultTimezone = document.getElementById("output-timezone");
    const targetTimeZone = document.getElementById("country-selector");
    const resultTimeDisplay = document.getElementById("time-output");
    const timeZoneAbbreviation = targetTimeZone.options[targetTimeZone.selectedIndex].dataset.timezone;
    resultCountry.textContent = targetTimeZone.options[targetTimeZone.selectedIndex].textContent;
    resultTimezone.textContent = timeZoneAbbreviation;
    resultTimeDisplay.textContent = resultTime;

    toggleResultCard("show");
}

// function getCountryInfo() {
//     const selectedCountry = document.getElementById("country-selector");
//     for (let i = 0; i < timeTranslation.length; i++) {
//         if (timeTranslation[i].countryId === selectedCountry.value) {
//             return timeTranslation[i];
//         }
//     }
// }

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

function calculate() {
    const inputDate = document.getElementById("datetime-selector").value;
    const originalTimeZone = document.getElementById("timezone-selector").value;
    const targetTimeZone = document.getElementById("country-selector").value;
    
    if (!inputDate || !originalTimeZone || !targetTimeZone) {
        customAlert("Please enter Date/Time, select a Timezone and select a Country to calculate the Time for")
        return;
    }
    const originalTime = DateTime.fromISO(inputDate, { zone: originalTimeZone });
    const targetTime = originalTime.setZone(targetTimeZone);
    const formattedTime = (targetTime.toFormat("yyyy-MM-dd HH:mm")); // "2025-07-08 02:57"
    displayResults(formattedTime);

}

function customAlert(message) {
    const overlay = document.getElementById('customAlertOverlay');
    const messageElement = document.getElementById('customAlertMessage');
    const okButton = document.getElementById('customAlertOK');
    messageElement.textContent = message;
    overlay.style.display = 'flex';
    okButton.onclick = function() {
        overlay.style.display = 'none';
    }
}

