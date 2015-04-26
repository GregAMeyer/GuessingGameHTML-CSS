$(document).ready(function () {
	//generate a number between 1-100
	var $randomNum = Math.floor((Math.random() * 100) + 1);
	//when user presses submit button
	//replace the starting rules with number of guesses left
	//compare user input to the random number
	//if user input is higher/lower, append a sentence to the game that tells them
	//higher/lower and hot/cold
	var count = 0;

	$('.reset').click(function(){};

	$('.submit').click(function(){
		//count goes up each time submitted
		count++;
		//replace the 5 guesses to start with number guesses left
		$('.numGuesses').replaceWith("<h3 class='numGuesses'>You have "+(5-count)+" guesses left.</h3>");
		//if guessed 5 times, tell them they're too slow
		if(count==5){
			$('.numGuesses').append("<h3 class='tooSlow'>You're too slow! Try again by hitting reset.</h3>")
			//hide the submit button
			$('.submit').hide()
			//remove any hot/cold high/low
			$('.temp').remove()
		}
		//the value in the input field
		var $userInput = $('.field').val();
		//the difference btwn the guess and the number, for comparison to 0 to get higher/lower
		var $signDiff = $userInput - $randomNum;
		//the absolute difference between the guess and the random number
		var $absDiff = Math.abs($signDiff);
		//logic for response on hot/cold, high/low
		if($absDiff>25 && $signDiff>0 && count<5){
			$('.temp').replaceWith("<h3 class='temp'>You're really cold and need to guess lower.<h3>")
		}
		if($absDiff>25 && $signDiff>0 && count<5){
			$('.temp').replaceWith("<h3 class='temp'>You're really cold and need to guess lower.<h3>")
		}
		if($absDiff>25 && $signDiff<0 && count<5){
			$('.temp').replaceWith("<h3 class='temp'>You're really cold and need to guess higher.<h3>")
		}
		if($absDiff>15 && $absDiff<=25 && $signDiff>0 && count<5){
			$('.temp').replaceWith("<h3 class='temp'>You're cold and need to guess lower.<h3>")
		}
		if($absDiff>15 && $absDiff<=25 && $signDiff<0 && count<5){
			$('.temp').replaceWith("<h3 class='temp'>You're cold and need to guess higher.<h3>")
		}
		if($absDiff<5 && $signDiff>0 && count<5){
			$('.temp').replaceWith("<h3 class='temp'>You're really hot and need to guess lower.<h3>")
		}
		if($absDiff<5 && $signDiff<0 && count<5){
			$('.temp').replaceWith("<h3 class='temp'>You're really hot and need to guess higher.<h3>")
		}
		if($absDiff>=5 && $absDiff<=15 &&  $signDiff>0 && count<5){
			$('.temp').replaceWith("<h3 class='temp'>You're hot and need to guess lower.<h3>")
		}
		if($absDiff>=5 && $absDiff<=15 &&  $signDiff<0 && count<5){
			$('.temp').replaceWith("<h3class='temp'>You're hot and need to guess higher.<h3>")
		}
		if($signDiff==0){
			$('.temp').replaceWith("<h3 class='temp'>You got the number!!!.<h3>")
		}
	});
});
