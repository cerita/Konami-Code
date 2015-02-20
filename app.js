// Konami Code Easter Egg

$(document).ready(function() {
	
	//Array of keys that need to be pressed
	var konamKeys = [38,38,40,40,37,39,37,39,66,65];
	console.log(konamKeys);
	//Empty array to compare to KonamKeys
	var check = [];
	console.log(check);
	var hue = [ '#FF0000', '#f26522', '#fff200', '#00a651',  '#28abe2',  '#2e3192', '#6868ff'];
	
	
	//For every item pressed, compare to index in konamKeys
	$(this).keyup(function(e) { //when 'e' key is pressed
		check.push(e.keyCode); //push 'e' keycode into the check array
		console.log("You pressed " + check); 
		for (var i=0; i < check.length; i++) { //For every key pressed
			if 	(check[i] != konamKeys[i]) { //If the next key pressed does not match the next key in the konami code
				check = []; //empty the array
			}						
		}
		
		if (check.length == konamKeys.length) {
			alert("KONAMI! Let's play.");
		} //YOu did it!
	})
		

});
