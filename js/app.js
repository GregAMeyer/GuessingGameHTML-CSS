$(document).ready(function () {
	//generate a number between 1-100
	var $randomNum = Math.floor((Math.random() * 100) + 1);
	var count = 0;
	var $guesses = [];

	$('.reset').click(function(){
		count = 0;
		$randomNum = Math.floor((Math.random() * 100) + 1);
		$('.submit').show();
		$('.tooSlow').remove();
		$('.temp').replaceWith("<h3 class='temp'>Go ahead and try!</h3>");
		$('.numGuesses').replaceWith("<h3 class='numGuesses'>You have 5 guesses to start</h3>");
		$('.guesses').replaceWith("<h4 class='guesses'></h4>");
		$guesses = [];
		$('.tempChange').replaceWtih("<h3 class='tempChange'></h3>");
		//why doesn't this reseting of 'repeat' work?
		$('.repeat').replaceWith("<h4 class='repeat'></h4>");
	});
	$('.hint').click(function(){
		$('.field').val($randomNum)
		$('.numGuesses').replaceWith("<h3 class='numGuesses'>The number was " + $randomNum + "</h3>")
		$('.temp').replaceWith("<h3 class='temp'>Try the game!</h3>")
		$('.tempChange').replaceWtih("<h3 class='tempChange'></h3>")
	});

	//check if the last element in the array (most recent guess) is a repeat 
	function checkRepeat(guess, array){
		if(guess.indexOf(array)>0){
			$('.repeat').replaceWith("<h4 class='repeat'>That's a repeat! Idk why reset doesnt get rid of this.</h4>")
		}
		else console.log("no repeat")
	};
	//hotter or colder compared to last guess logic
	function hotterColder(guess, array){
		var lastGuess = array[array.length-2];
		var lastGuessDiff = $randomNum - lastGuess;
		var thisGuessDiff = $randomNum - guess;
		if(Math.abs(lastGuessDiff) > Math.abs(thisGuessDiff)){
			$('.tempChange').replaceWtih("<h3 class='tempChange'>You're getting HOTTER!</h3>")
			console.log('hotter')
		}
		if(Math.abs(lastGuessDiff) < Math.abs(thisGuessDiff)){
			$('.tempChange').replaceWtih("<h3 class='tempChange'>You're getting COLDER!</h3>")
			console.log('colder')
		}
	}

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
		$('.guesses').replaceWith("<h4 class='guesses'>Your guesses: "+ $guesses +"</h3>")
		
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
		checkRepeat($userInput, $guesses.slice(0,($guesses.length-2)));
		hotterColder($userInput, $guesses);
	});
});

