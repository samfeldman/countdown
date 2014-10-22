//username, password

// write html with elements of the clock
// two rectangles one inside the other
// center rectangle has a div with the clock numbers inside it

// array with the time
// function with if: when user submits form the countdown starts
// 

//





// zero triggers alert with ACCESS DENIED PLEASE CALL FOR HELP

$(document).ready(function() {




		function start() { //starts clock counting down to 0

			$(".minutes").text("00"); //sets the minutes h1 element to read 00
			$(".seconds").text("59"); //sets the seconds h1 element to read 59
			$(".milliseconds").text("99"); //sets the milliseconds h1 element to read 99
		

			function seconds() { //counts seconds down, stops milliseconds from counting down when seconds reach 0

				var s = $(".seconds").text(); //sets variable "s" to whatever is in the seconds element
				if (s<60 && s>0) { //if seconds are less than 60 and greater than 0, the seconds element counts down to 0
					s--; 	
				} else { //otherwise (the seconds element is 0) the milliseconds function interval stops
					clearInterval(milliseconds);
					return false; //function "seconds" return as false
				}

				$(".seconds").text(s); //the seconds element text will read as the new smaller variable "s"
				return true; //function "seconds" return as true


			}

			var milliseconds = setInterval(function() { //variable "milliseconds" is set to a setInterval function

				var mm = $(".milliseconds").text(); //variable "mm" is the value of the milliseconds h1 element 
				if (mm<100 && mm>0) { //if mm is less than 100 and greater than 0, mm decreases
					mm--; 	
				} else { //if mm reaches zero and if the seconds function is true (continues to go down) mm value returns to 99
					if(seconds() == true) {
						mm = 99;
					}
				}
				
				$(".milliseconds").text(mm); //the milliseconds h1 element is reset to the smaller mm

			}, 10); // the setInterval function calls every millisecond
		}


	function checkPass() { //makes sure the password is entered and correct; if not, calls the "start" function
		
		if ($("#password").val() == "") { //if the value entered in password is blank, alerts and returns false
			alert("Please fill in a password!");
			return false;
		} else if ($("#password").val() !== "12345") { //if the password is not correct, calls the "start" function and alerts
			start();
			alert("You have one minute to enter the correct password!");
			return false;
		} else { // if the password is correct, returns true
			return true;
		}

	}

	function checkUsername() { //makes sure username is entered and not blank

		if ($("#username").val() == "") { //if the username is not entereed, alerts and returns false
			alert("Please fill in a username!");
			return false;
		} else {
			return true; //if username is entered, returns true
		}

	}


	$("form").submit(function(){ //subits the form when submit button is pressed only if checkPass and checkUsername are true
		
		if(checkPass() && checkUsername()){ //if checkPass/Username functions are true
			$(".minutes").text("0"); //the h1 element for minutes is changed to 0
			var conf = confirm("Form submitted!"); //a variable conf puts up a confirm alert
			if (conf) { //if the confirm window is confirmed a new window opens with the yay.html doc
				window.location = "yay.html";
			}

		}
	
		return false; //form function is not actually submitted! info not going anywhere yet!

	});
		


});

