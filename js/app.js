$(document).ready(function () {
//generate a number between 1-100
var $randomNum = Math.floor((Math.random() * 100) + 1);
//when user presses submit button
//compare user input to the random number
//if user input is higher/lower, append a sentence to the game that tells them
//higher/lower and hot/cold

var count = 0;

$('.submit').click(function(){

	//the value in the input field
	var $userInput = $('.field').val();
	//the difference btwn the guess and the number, for comparison to 0 to get higher/lower
	var $signDiff = $userInput - $randomNum;
	//the absolute difference between the guess and the random number
	var $absDiff = Math.abs($signDiff);

	if($('.numberGuesses').next('.tooslow')){
	//if the next thing after the statement of having 5 guesses
	//is the statement too slow
	//it should be the only thing, it should not have the hot/cold higher/lower
	}
	if(count>0){
		//if count>0, subtract count from 5 and display number of guesses left
		$('rules').append('You have '+5-count+' guesses left.')
	}

	if($('.rules').children('h3')){
		$('.rules').children('h3').remove()
	}
	if(count>=5){
		$('.rules').children('h3').replaceWith("<h3 class='tooslow'>You're too slow!<h3>")
	}
	if($absDiff>25 && $signDiff>0){
		$('.rules').children().replaceWith("<h3>You're really cold and need to guess lower.<h3>")
		count++
	}

/*
	if($absDiff>25 && $signDiff>0){
		$('.rules').append("<h3>You're really cold and need to guess lower.<h3>")
		count++
	}
	if($absDiff>25 && $signDiff<0){
		$('.rules').append("<h3>You're really cold and need to guess higher.<h3>")
		count++
	}
	if($absDiff>15 && $absDiff<=25 && $signDiff>0){
		$('.rules').append("<h3>You're cold and need to guess lower.<h3>")
		count++
	}
	if($absDiff>15 && $absDiff<=25 && $signDiff<0){
		$('.rules').append("<h3>You're cold and need to guess higher.<h3>")
		count++
	}
	if($absDiff<5 && $signDiff>0){
		$('.rules').append("<h3>You're really hot and need to guess lower.<h3>")
		count++
	}
	if($absDiff<5 && $signDiff<0){
		$('.rules').append("<h3>You're really hot and need to guess higher.<h3>")
		count++
	}
	if($absDiff>=5 && $absDiff<=15 &&  $signDiff>0){
		$('.rules').append("<h3>You're hot and need to guess lower.<h3>")
		count++
	}
	if($absDiff>=5 && $absDiff<=15 &&  $signDiff<0){
		$('.rules').append("<h3>You're hot and need to guess higher.<h3>")
		count++
	}

*/
	else if ($signDiff==0){
		$('.rules').append("<h3>You got the number!!!.<h3>")
	}
})

});
