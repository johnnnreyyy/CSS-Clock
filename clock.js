$(document).ready( function() {
 
  function displayTime() {
	
	var currentTime = new Date();
    
    var hours = currentTime.getHours();
    
    var minutes = currentTime.getMinutes();
    
    var seconds = currentTime.getSeconds();
    
    
  	if (seconds < 10) {
   	 seconds = "0" + seconds;

}
    if (minutes < 10) {
    minutes = "0" + minutes;
}
    if (hours < 10) {
    hours = "0" + hours; 

}

  var meridiem = "AM";

  	if (hours > 12) {
    hours = hours - 12;
    meridiem = "PM";
}

	if (hours === 0) {
    hours = 12;
}

 var clockDiv = document.getElementById('clock');

 clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
}
displayTime();

setInterval(displayTime, 1000);
});