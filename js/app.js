$(document).ready(function () {
	//generate a number between 1-100
	var randomNum = Math.floor((Math.random() * 100) + 1);
	var count = 0;
	var guessesArr = [];
	//reset and hint button functionality
	$('.reset').click(function(){
		//reset beginning variables
		randomNum = Math.floor((Math.random() * 100) + 1);
		count = 0;
		guessesArr = [];
		//reset beginning buttons
		$('.submit').show();
		//reset beginning instructions
		$('.numGuesses').replaceWith("<h3 class='numGuesses'>You have 5 guesses to start</h3>");
		$('.temp').replaceWith("<h3 class='temp'>Go ahead and try!</h3>");
		$('.tempChange').replaceWith("<h3 class='tempChange'></h3>");
		$('.guesses').replaceWith("<h4 class='guesses'></h4>");
		$('.repeat').replaceWith("<h4 class='repeat'></h4>");
		$('.tooSlow').replaceWith("<h3 class='tooSlow'></h3>");
		$( 'body' ).css( "background-color", "#E2E2CA" )
	});
	$('.hint').click(function(){
		$('.field').val(randomNum)
		$('.numGuesses').replaceWith("<h3 class='numGuesses'>The number was " + randomNum + "</h3>")
		$('.temp').replaceWith("<h3 class='temp'>Try the game!</h3>")
		$('.tempChange').replaceWith("<h3 class='tempChange'></h3>")
	});
	//check if the last element in the array (most recent guess) is a repeat 
	function checkRepeat(guess, array){
		//check only previous guesses
		//by slicing the most recent guess off the array
		//but only in this function
		array = array.slice(0,(array.length-1));
		//array must have a guess in it to compare to most recent guess
		if(array.length>0){
			if(array.indexOf(guess)>-1){
				$('.repeat').replaceWith("<h4 class='repeat'>That's a repeat!</h4>")
			}
			else {
				$('.repeat').replaceWith("<h4 class='repeat'></h4>")	
			}
		}
	};
	//hotter or colder compared to last guess logic
	function hotterColder(guess, array){
		var lastGuess = array[array.length-2];
		var lastGuessDiff = randomNum - lastGuess;
		var thisGuessDiff = randomNum - guess;
		if(Math.abs(lastGuessDiff) > Math.abs(thisGuessDiff) && count!=5 && thisGuessDiff!==0){
			$('.tempChange').replaceWith("<h3 class='tempChange'>You're getting HOTTER!</h3>")
		}
		if(Math.abs(lastGuessDiff) < Math.abs(thisGuessDiff) && count!=5 && thisGuessDiff!==0){
			$('.tempChange').replaceWith("<h3 class='tempChange'>You're getting COLDER!</h3>")
		}
	}

	$('.submit').click(function clickSubmit(){
		//count goes up each time submitted
		count++;
		//the value in the input field
		var $userInput = $('.field').val();
		//the difference btwn the guess and the number, for comparison to 0 to get higher/lower
		var signDiff = $userInput - randomNum;
		//the absolute difference between the guess and the random number
		var absoluteDiff = Math.abs(signDiff);
		//push guess into array to keep track
//how do i clear the input field without clearning the value?
//would be better if user didn't have to delete their last guess
//how do i use git with two branches 
		guessesArr.push($userInput);
		//show what guessesArr contains, a string of numbers guessed so far
		$('.guesses').replaceWith("<h4 class='guesses'>Your guesses: "+ guessesArr +"</h3>")
		
		//if the guess is a real number between 1-100
		if($.isNumeric($userInput) && $userInput>0 && $userInput<101){
			//replace the 5 guesses to start with number guesses left
			$('.numGuesses').replaceWith("<h3 class='numGuesses'>You have "+(5-count)+" guesses left.</h3>");
			//if guessed 5 times, tell them they're too slow
			if(count==5 && signDiff!==0){
				$('.tooSlow').replaceWith("<h3 class='tooSlow'>You're too slow! Try again by hitting reset.</h3>");
				//hide the submit button
				$('.submit').hide()
				//remove any hot/cold high/low
				$('.temp').replaceWith("<h3 class='temp'></h3>")
				$('.tempChange').replaceWith("<h3 class='tempChange'></h3>")
			}
			//logic for response on hot/cold, high/low
			if(absoluteDiff>25 && signDiff>0 && count<5){
				$('.temp').replaceWith("<h3 class='temp'>You're really cold and need to guess lower.<h3>")
			}
			if(absoluteDiff>25 && signDiff>0 && count<5){
				$('.temp').replaceWith("<h3 class='temp'>You're really cold and need to guess lower.<h3>")
			}
			if(absoluteDiff>25 && signDiff<0 && count<5){
				$('.temp').replaceWith("<h3 class='temp'>You're really cold and need to guess higher.<h3>")
			}
			if(absoluteDiff>15 && absoluteDiff<=25 && signDiff>0 && count<5){
				$('.temp').replaceWith("<h3 class='temp'>You're cold and need to guess lower.<h3>")
			}
			if(absoluteDiff>15 && absoluteDiff<=25 && signDiff<0 && count<5){
				$('.temp').replaceWith("<h3 class='temp'>You're cold and need to guess higher.<h3>")
			}
			if(absoluteDiff<5 && signDiff>0 && count<5){
				$('.temp').replaceWith("<h3 class='temp'>You're really hot and need to guess lower.<h3>")
			}
			if(absoluteDiff<5 && signDiff<0 && count<5){
				$('.temp').replaceWith("<h3 class='temp'>You're really hot and need to guess higher.<h3>")
			}
			if(absoluteDiff>=5 && absoluteDiff<=15 &&  signDiff>0 && count<5){
				$('.temp').replaceWith("<h3 class='temp'>You're hot and need to guess lower.<h3>")
			}
			if(absoluteDiff>=5 && absoluteDiff<=15 &&  signDiff<0 && count<5){
				$('.temp').replaceWith("<h3 class='temp'>You're hot and need to guess higher.<h3>")
			}
			if(signDiff==0){
				$('.tooSlow').replaceWith("<h3 class='tooSlow'></h3>")
				$('.tempChange').replaceWith("<h3 class='tempChange'></h3>")
				$('.temp').replaceWith("<h3 class='temp'>You got the number!!!.<h3>")
				$('.submit').hide()
				$('.guesses').replaceWith("<h4 class='guesses'></h4>")
				$( 'body' ).css( "background-color", "#A3FFA3" )
			}
		}
		else {
			$('.temp').replaceWith("<h3 class='temp'>You need to choose a number between 1 and 100.<h3>")
		}
		checkRepeat($userInput, guessesArr);
		hotterColder($userInput, guessesArr);
	});

	$('body').keypress(function (e) {
  		if (e.which == 13) {
    		$('.submit').click();
    		//return false;    //<---- Add this line
  		}
	});
});

