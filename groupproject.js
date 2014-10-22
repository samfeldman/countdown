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

	// function checkPass() {
		
	// 	if ($("#password").val() == "") {
	// 		alert("Please fill in a password!");
	// 		return false
	// 	} else if ($("#password").val() !== "12345") {
	// 		alert("Password incorrect, try again.");
	// 		return false
	// 	} else {
	// 		return true
	// 	}

	// }

	// function checkUsername() {

	// 	if ($("#username").val() == "") {
	// 		alert("Please fill in a username!");
	// 		return false
	// 	} else {
	// 		return true
	// 	}

	// }

	// $("form").submit(function(){
		
	// 	if(checkPass() && checkUsername()){
	// 		alert("The form has been submitted.");
	// 	}
	
	// 	return false

	// });
		
			
	//SET DELAY 



			var s = 59

			function seconds() {

				setTimeout(function() {

					$(".seconds").html(s);
					s--;
					if (s < 60 && s >= 0) {
						seconds();
					}
				}, 1000)

			}

			seconds();
			






			
			var i = 99

		 
			
			function milliseconds() {
				
				setTimeout(function() {
					
					$(".milliseconds").html(i);
					i--;
					if (i < 100 && i >= 0) {
						milliseconds();
					}
				}, 10)
				
			}

			milliseconds();

});

