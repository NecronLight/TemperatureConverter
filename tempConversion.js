const convertToCelsius = function(tempFahr) {
  if (isNaN(tempFahr)) {
    alert("Please insert a number. Reload the page.");
  }

  else {
    tempCelsius = ((tempFahr - 32) * (5/9));
    tempCelsiusRounded = Math.round(tempCelsius * 10) / 10;
    alert((tempCelsiusRounded) + " °C");
  }

};

const convertToFahrenheit = function(tempCelsius) {
  if (isNaN(tempFahr)) {
    alert("Please insert a number. Reload the page.");
  }
  
  else {
    tempFahr = ((tempCelsius * (9/5) + 32));
    tempFahrRounded = Math.round(tempFahr * 10) / 10;
    alert((tempFahrRounded) + " °F");
  }

};

const option = prompt("Choose an option: 1- Convert °F to °C; 2- Convert °C to °F");
if (option === "1") {
  tempFahr = prompt("Type the temperature _°F");
  convertToCelsius(tempFahr);
}

else if (option === "2") {
  tempCelsius = prompt("Type the temperature _°C");
  convertToFahrenheit(tempCelsius);
}

else {
  alert("Choose 1 or 2. Reload the page.");
}
