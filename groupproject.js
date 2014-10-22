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




		function start() {

			$(".minutes").text("00");
			$(".seconds").text("59");
			$(".milliseconds").text("99"); 
		

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
		}


	function checkPass() {
		
		if ($("#password").val() == "") {
			alert("Please fill in a password!");
			return false
		} else if ($("#password").val() !== "12345") {
			start();
			alert("You have one minute to enter the correct password!");
			return false
		} else {
			return true
		}

	}

	function checkUsername() {

		if ($("#username").val() == "") {
			alert("Please fill in a username!");
			return false
		} else {
			return true
		}

	}


	$("form").submit(function(){
		
		if(checkPass() && checkUsername()){
			$(".minutes").text("0");
			var conf = confirm("Form submitted!")
			if (conf) {
				window.location = "yay.html"
			}

		}
	
		return false

	});
		


});

