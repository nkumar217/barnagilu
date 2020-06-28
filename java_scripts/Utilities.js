// Function to convert temperature
function temperatureConverter1(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputCelsius").innerHTML=(valNum-32)/1.8;
}

/*
Function to convert Celsius to Fahrenheit
This function does not validate the input.
*/
function celsiusToFahrenheit1(celsius) {
	valNum = parseFloat(celsius);
	document.getElementById("ouputFahrenheit").innerHTML=(valNum*(9/5)) + 32;
}

// Function to convert feet to inches
function feetToInches(feet) {
	valNum = parseFloat(feet);
	document.getElementById("outputInches").innerHTML= valNum*12;
}

/*
Function to convert miles to KM
*/
function mileToKM(mile) {
	valNum = parseFloat(mile);
	document.getElementById("outputKM").innerHTML = valNum * 1.6;
}

/*
Function to printMessage on the alert window.
*/
function printMessage(str) {
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	alert("Hello.." + str);
	alert("Today's date..." + date);
}

/* Function to calculate Age */
function calculateAge(dateOfBirth) {
	/*var today = new Date(); */
	
	var today = formatDate();
	var birthDate = new Date(dateOfBirth);
	console.log("date of birth is::" + birthDate);
	console.log("Today's date is::" + today);
	console.log(today.split("-")[2])
	var age = parseInt(today.split("-")[2])-birthDate.getFullYear();
	var month = parseInt(today.split("-")[0]) - birthDate.getMonth();
	if (month < 0) {
		month = month + 12;
		age = age - 1;
	}
	var days = parseInt(today.split("-")[1]) - birthDate.getDate();
	
	if (days < 0 ) {
		days = days+30;
		month = month-1;
	}
	alert("YOUR AGE IS\n"+ age + " Year(s)-" + month  + " Month(s)-" + days + " day(s)");
}

/* Function to format date */
function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth()),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [month, day, year].join('-');
}

function calculateDay(date, month, year) {
	let dateStr = date;
	let monthStr = month;
	let yearStr = year;

	/* (YY + (YY div 4)) mod 7;
	0 3 3 6 1 4 6 2 5 0 3 5 are magic numbers for the months
	Jan-0, feb-3, mar-3, apr-6, may-1,jun-4
	Jul-6, aug-2, sep-5, oct-0, nov-3, dec-5	
	var car = {type:"Fiat", model:"500", color:"white"};
	*/
	
	let temp1 = year % 100;
	let temp2 = Math.floor(temp1 / 4);
	let temp3 = (temp1 + temp2) % 7;
	var monthDays = {1:0, 2:3, 3:3, 4:6, 5:1, 6:4, 7:6, 8:2, 9:5, 10:0, 11:3, 12:5}
	var century = {1700:4, 1800:2, 1900:0, 2000:6}
	let temp4 = monthDays[parseInt(month)];
	let temp5 = (temp3 + temp4 + parseInt(date) + parseInt(century[(year-temp1)])) % 7;
	var weekDays = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}
	console.log("TEMP1=" + temp1);
	console.log("TEMP2=" + temp2);
	console.log("YEAR_DAYS" + temp3);
	console.log("MONTH_DAYS" + temp4);
	console.log("DATE_DAYS" + date);
	console.log(typeof(date));
	console.log(typeof(month));
	console.log(typeof(year));
	console.log("TOTAL"+ (temp3+temp4+parseInt(date) + parseInt(century[(year-temp1)])));
	console.log ("TEMP5" + temp5);	
	console.log("DAY" + weekDays[parseInt(temp5)])
	document.getElementById("outputDay").innerHTML = weekDays[parseInt(temp5)];
}
function validateDate(var1, var2) {
	if (var1 == "date") {
		if ( parseInt(var2) > 0 && parseInt(var2) <= 31) {
			console.log("VALIDATION PASSED");
		} else {
			console.log("VALIDATION FAILED");
			alert("Enter date value between 1 and 31");
			document.getElementById("inputDate").value = "";
		} 
	} else if (var1 == "month") {
		console.log("MONTH CHECK");
		if ( parseInt(var2) > 0 && parseInt(var2) <= 12) {
			console.log("VALIDATION PASSED");
		} else {
			console.log("VALIDATION FAILED");
			alert("Enter Month value between 1 and 12");
			document.getElementById("inputMonth").value = "";
		} 
	} else if (var1 == "year") {
		console.log("YEAR CHECK");
		if ( parseInt(var2) > 0 && parseInt(var2) <= 20000) {
			console.log("VALIDATION PASSED");
		} else {
			console.log("VALIDATION FAILED");
			alert("Enter YEAR value between 1 and 2000");
			document.getElementById("inputYear").value = "";
		} 
	}
}

function GallonsToLitres(gallons) {
    valNum = parseFloat(gallons);
	document.getElementById("outputLitres").innerHTML = valNum * 3.78;
}


function add(valNum1, valNum2) {
	valNum1 = parseFloat(valNum1);
    valNum2 = parseFloat(valNum2);
	document.getElementById("outputResult").innerHTML = valNum1 + valNum2;
}

function sub(valNum1, valNum2) {
	valNum1 = parseFloat(valNum1);
    valNum2 = parseFloat(valNum2);
	document.getElementById("outputResult").innerHTML = valNum1 - valNum2;
}

function mul(valNum1, valNum2) {
	valNum1 = parseFloat(valNum1);
    valNum2 = parseFloat(valNum2);
	document.getElementById("outputResult").innerHTML = valNum1 * valNum2;
}

function div(valNum1, valNum2) {
	valNum1 = parseFloat(valNum1);
    valNum2 = parseFloat(valNum2);
	document.getElementById("outputResult").innerHTML = valNum1 / valNum2;
}



/*
Demonstrate variable declaration
*/

