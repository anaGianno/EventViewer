// make an ajax request to the sql database 
let ajaxRequest = (method, url,data, callback,callbackID) => {
	let request = new XMLHttpRequest();
	request.open(method,url);
	
	if(method == "POST"){
		request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	}

	// use different ids for displaying response text based on url
	// if(url == "getAllEvents.php"){
	// 	request.onload = function(){
	// 		let response = request.responseText;
	// 		callback(response,"allEvents");
	// 	}
	// 	request.send();
	// } else if(url == "getEventInfo.php"){
	// 	request.onload = function(){
	// 		let response = request.responseText;
	// 		callback(response,"eventInfo");
	// 	}
	// 	request.send(data);
	// }else if(url == "updateNotes.php"){
	// 	request.onload = function(){
	// 		let response = request.responseText;
	// 		console.log("response: " + response);
	// 		callback(response,"updateNotes");
	// 	}
	// 	request.send(data);
	// }

	request.onload = function(){
		let response = request.responseText;
		callback(response,callbackID);
	}

	if(url == "getAllEvents.php"){
		request.send();
	} else {
		request.send(data);
	}	
}

// display data from ajaxRequest using tag id
let processResult = (response,id) => {
	let data = document.getElementById(id);
	data.innerHTML = response;
}

// get all events from the database
let getAllEvents = () => {
    let url = "getAllEvents.php";
    // ajaxRequest("GET", url,"",processResult);
	ajaxRequest("GET", url,"",processResult,"allEvents");
}

// get information of an event using its id
let getEventInfo = (eventId) => {
    let url = "getEventInfo.php";
	let data = "id="+eventId;
    // ajaxRequest("POST", url,data,processResult);
	ajaxRequest("POST", url,data,processResult,"eventInfo");
}

// update the notes of an event using its id
let updateNotes = (eventId) => {
    let url = "updateNotes.php";
	let notes = document.getElementById("notes").value;
	let data = "notes="+notes+"&id="+eventId;
    // ajaxRequest("POST", url,data,processResult);
	ajaxRequest("POST", url,data,processResult,"updateNotes");
}

// refresh the event list and empty the event details 
let refreshEvents = () => {
	getAllEvents();
	let eventInfo = document.getElementById("eventInfo");
	eventInfo.innerHTML = "";
}

// get list of events when site is loaded
window.onload = function() {
    getAllEvents();
};

// make a fetch request to external weather api using latlong event data
let getWeather = (lat, long) =>{
	fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=713be68449f49eb599ea18a84b4722a7")
	.then(response => response.json())
	.then(displayWeather);
}

// display weather data from api response
let displayWeather = (response) =>{
	let weatherInfo = document.getElementById("weather");
	weatherInfo.innerHTML = "<p>Weather Data <br> Description: " + response.weather[0].description + "<br> Temperature: " + response.main.temp + "<br> Humidity: " + response.main.humidity+ "</p>"
}

