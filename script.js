let ajaxRequest = (method, url,data, callback) => {
	let request = new XMLHttpRequest();
	request.open(method,url);
	
	if(method == "POST"){
		request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	}

	if(url == "getAllEvents.php"){
		request.onload = function(){
			let response = request.responseText;
			callback(response,"allEvents");
		}
		request.send();
	} else if(url == "getEventInfo.php"){
		request.onload = function(){
			let response = request.responseText;
			callback(response,"eventInfo");
		}
		request.send(data);
	}else if(url == "updateNotes.php"){
		request.send(data);
		console.log("Notes updated"); 
	}
	
}

let processResult = (response,id) => {
	let data = document.getElementById(id);
	data.innerHTML = response;
}

let getAllEvents = () => {
    let url = "getAllEvents.php";
    ajaxRequest("GET", url,"",processResult);
}

let getEventInfo = (eventId) => {
    let url = "getEventInfo.php";
	let data = "id="+eventId;
    ajaxRequest("POST", url,data,processResult);
}

let updateNotes = (eventId) => {
    let url = "updateNotes.php";
	let notes = document.getElementById("notes").value;
	let data = "notes="+notes+"&id="+eventId;
    ajaxRequest("POST", url,data,processResult);
}

window.onload = function() {
    getAllEvents();
};

let getWeather = (lat, long) =>{
	fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=713be68449f49eb599ea18a84b4722a7")
	.then(response => response.json())
	.then(displayWeather);
}

let displayWeather = (response) =>{
	console.log("Description: " +response.weather[0].description + " Temperature: " + response.main.temp + " Humidity: " + response.main.humidity);
}

