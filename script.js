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
			console.log("Response Text:", response);
			callback(response,"eventInfo");
		}
		request.send(data);
	}
	
}

let processResult = (response,id) => {
	let data = document.getElementById(id);
	console.log("Response:", response);
	data.innerHTML = response;
}

let getAllEvents = () => {
    let url = "getAllEvents.php";
    ajaxRequest("GET", url,"",processResult);
}

let getEventInfo = (eventId) => {
    let url = "getEventInfo.php";
	let data = "id="+eventId;
	console.log("Event id:", eventId);
    ajaxRequest("POST", url,data,processResult);
}

window.onload = function() {
    getAllEvents();
};

