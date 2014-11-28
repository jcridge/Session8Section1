//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
	//set up listener for toggle switch
	$(document).on('slidestart', getPosition);
});


function getPosition() {
	//change time box to show updated message
	$('#time').val("Getting data...");
	$('#latitude').val("Getting data...");
	$('#longitude').val("Getting data...");

	//instruct location service to get position with appropriate callbacks
	var watchID = navigator.geolocation.watchPosition(successPosition,  failPosition, locationOptions);
	
	var locationOptions = {
		maximumAge: 10000,
		timeout: 6000,
		enableHighAccuracy: true
	};
}

function successPosition(position) {
	
	var time = position.timestamp;
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var altitude = position.coords.altitude;
	var altac = position.coords.altitudeAccuracy;
	var heading = position.coords.heading;
	var speed = position.coords.speed;	
	
	//OK. Now we want to update the display with the correct values
	$('#time').val("Received data at " + time);
	$('#lattext').val(latitude);
	$('#longtext').val(longitude);
	$('#altitude').val(altitude);
	$('#altacc').val(altac);
	$('#heading').val(heading);
	$('#speed').val(speed);
	//alert("Your altitude is: " + altitude + "Your Altitude Accuracy is: " + altac + "Your heading is: " + heading + "Your speed is: " + speed);
	
}

function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
	$('#latitude').val("Error getting data: " + error);
	$('#longitude').val("Error getting data: " + error);
}
