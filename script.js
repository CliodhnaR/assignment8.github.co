function loadData() {
			
	request = new XMLHttpRequest();
	request.open("GET", "https://meowfacts.herokuapp.com/", true);

	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			theData = request.responseText;
			theData = JSON.parse(theData)
			theData = theData.data
			document.getElementById("step2").innerHTML += theData;
			
		}
		else if (request.readyState == 4 && request.status != 200) {
		   document.getElementById("step2").innerHTML += "<br>Request failed!";
		}

	}
	request.send();
	
}

loadData();

res = fetch("https://meowfacts.herokuapp.com/")
.then (res => res.text())
.then (info => 
	{
    	info = JSON.parse(info)
    	info = info.data;
    	document.getElementById("step3").innerHTML += info;
	})
.catch (error => document.getElementById("step3").innerHTML += "<br>Request failed!")