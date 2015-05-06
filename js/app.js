$(document).ready(function () {
	//generate a number between 1-100
	var $randomNum = Math.floor((Math.random() * 100) + 1);
	var count = 0;
	var $guesses = [];

	$('.reset').click(function clickReset(){
		count = 0;
		$randomNum = Math.floor((Math.random() * 100) + 1);
		$('.submit').show();
		$('.tooSlow').remove();
		$('.temp').replaceWith("<h3 class='temp'>Go ahead and try!</h3>");
		$('.numGuesses').replaceWith("<h3 class='numGuesses'>You have 5 guesses to start</h3>");
		$guesses = [];
		$('.guesses').replaceWith("<h4 class='guesses'></h4>")
		$('.tempChange').replaceWtih("<h3 class='tempChange'></h3>")
		$('.repeat').replaceWith("<h4 class='repeat'><h4>")
	});

	$('.hint').click(function clickHint(){
		$('.field').val($randomNum)
		$('.numGuesses').replaceWith("<h3 class='numGuesses'>The number was " + $randomNum + "</h3>")
		$('.temp').replaceWith("<h3 class='temp'>Try the game!</h3>")
		$('.tempChange').replaceWtih("<h3 class='tempChange'></h3>")
	});

	$('.submit').click(function clickSubmit(){
		//count goes up each time submitted
		count++;
		//the value in the input field
		var $userInput = $('.field').val();
		//the difference btwn the guess and the number, for comparison to 0 to get higher/lower
		var $signDiff = $userInput - $randomNum;
		//the absolute difference between the guess and the random number
		var $absDiff = Math.abs($signDiff);
		//push guess into array to keep track
		$guesses.push($userInput);
		
		//show what $guesses contains, a string of numbers guessed so far
		$('.guesses').replaceWith("<h4 class='guesses'>You've guessed "+$guesses.toString()+" so far.</h3>")
		
		//if the last element in the array (most recent guess) is a repeat 
		// --if the rest of the guesses array contains the guess, say its a repeat
		
		if($userInput.indexOf($guesses.slice(0,guesses.length-2))>-1){
			$('.repeat').replaceWith("<h4 class='repeat'>That's a repeat! Oh No!</h4>")
		}
		/*
		//hotter or colder compared to last guess logic
		if(Math.abs($randomNum - $guesses[$guesses.length-1]) > Math.abs($randomNum - $userInput)){
			$('.tempChange').replaceWtih("<h3 class='tempChange'>You're getting HOTTER!</h3>")
		}
		if(Math.abs($randomNum - $guesses[$guesses.length-1]) < Math.abs($randomNum - $userInput)){
			$('.tempChange').replaceWtih("<h3 class='tempChange'>You're getting COLDER!</h3>")
		}
		*/
		
		//trying to figure out why the hotter/colder and repeat logic doesn't work
		//it also stops the hot/cold high/low logic from working
		
		//if the guess is a real number between 1-100
		if($.isNumeric($userInput) && $userInput>0 && $userInput<101){
			//replace the 5 guesses to start with number guesses left
			$('.numGuesses').replaceWith("<h3 class='numGuesses'>You have "+(5-count)+" guesses left.</h3>");
			//if guessed 5 times, tell them they're too slow
			if(count==5 && $signDiff!==0){
				$('.numGuesses').append("<h3 class='tooSlow'>You're too slow! Try again by hitting reset.</h3>")
				//hide the submit button
				$('.submit').hide()
				//remove any hot/cold high/low
				$('.temp').hide()
			}
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
				$('.temp').replaceWith("<h3 class='temp'>You're hot and need to guess higher.<h3>")
			}
			if($signDiff==0){
				$('.temp').replaceWith("<h3 class='temp'>You got the number!!!.<h3>")
				$('.submit').hide()
				$('.guesses').replaceWith("<h4 class='guesses'></h4>")
			}
		}
		else {
			$('.temp').replaceWith("<h3 class='temp'>You need to choose a number between 1 and 100.<h3>")
		}
	});
});

