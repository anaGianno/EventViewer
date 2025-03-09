let ajaxRequest = (method, url,data, callback) => {
	let request = new XMLHttpRequest();
	request.open(method,url);
	
	if(method == "POST"){
		request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	}

	request.onload = function(){
        let response = request.responseText;
        callback(response);
	}
	
	if(method == "POST"){
		request.send(data);
	} else{request.send();}
	
}

let getDataAjax = () => {
    let url = "getAllEvents.php";
    ajaxRequest("GET", url,"",processResult);

}

let processResult = (response) => {

	let data = document.getElementById("output");
	data.innerHTML = response;
        
}

window.onload = function() {
    getDataAjax();
};

