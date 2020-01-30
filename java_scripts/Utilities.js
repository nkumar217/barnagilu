function temperatureConverter1(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputCelsius").innerHTML=(valNum-32)/1.8;
}

function celsiusToFahrenheit1(celsius) {
	valNum = parseFloat(celsius);
	document.getElementById("ouputFahrenheit").innerHTML=(valNum*(9/5)) + 32;
}

function feetToInches(feet) {
	valNum = parseFloat(feet);
	document.getElementById("outputInches").innerHTML= valNum*12;
}

