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
	// 		$(".minutes").text("0");
	//		start();
	// 	}
	
	// 	return false

	// });
		
			
	//SET DELAY 

		
		// 	function seconds() {

		// 		var s = $(".seconds").text()

		// 		setTimeout(function() {
		// 			s--;
		// 			$(".seconds").html(s);
		// 			if (s < 60 && s > 0) {
		// 				seconds();
		// 			}
		// 		}, 1000)

		// 	}

			
		// 	function milliseconds() {

		// 		console.log("start a function");

			
		// 		var sec = (60)
		// 	//	var sec = $(".seconds").text();	
				
		// 		while(sec >= 0)  {
		// 			console.log("start of the while loop");

		// 			var mm = $(".milliseconds").text()

		// 			setTimeout(function() {
						
		// 			console.log("setTimeout");

		// 				mm--;
		// 				$(".milliseconds").text(mm);
		// 				if (mm < 100 && mm > 0) {
		// 					milliseconds();
		// 				}
		// 			}, 10); 
		// 		}	
		// 	}


		// function start() {
			
			$(".minutes").text("00");
			$(".seconds").text("3");
		// 	setTimeout(function() {
		// 		seconds();
		// 	}, 1);
			$(".milliseconds").text("99"); 
		// 	setTimeout(function() {
		// 		milliseconds();
		// 	}, 1);
		// }



		








		// start()

			function seconds() {

				var s = $(".seconds").text();
				if (s<60 && s>0) {
					s--; 	
				} else {
					clearInterval(milliseconds);
					return false;
				}

				$(".seconds").text(s);
				return true;


			}

			var milliseconds = setInterval(function() {

				var mm = $(".milliseconds").text();
				if (mm<100 && mm>0) {
					mm--; 	
				} else {
					if(seconds() == true) {
						mm = 99;
					}
				}
				
				$(".milliseconds").text(mm);

			}, 10);

});

