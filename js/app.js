$(document).ready(function () {
//generate a number between 1-100
var $randomNum = Math.floor((Math.random() * 100) + 1);
//when user presses submit button
//compare user input to the random number
//if user input is higher/lower, append a sentence to the game that tells them
//higher/lower and hot/cold
//the value in the input field
var $userInput = $('.field').val();
//the difference btwn the guess and the number, for comparison to 0 to get higher/lower
var $signDiff = $userInput - $randomNum;
//the absolute difference between the guess and the random number
var $absDiff = Math.abs($signDiff);

$('.submit').click(function(){
	if($('.rules').children('h3')){
		$('.rules').children('h3').remove()
	}
	if($absDiff>25 && $signDiff>0){
		$('.rules').append("<h3>You're really cold and need to guess lower.<h3>")
	}
	if($absDiff>25 && $signDiff<0){
		$('.rules').append("<h3>You're really cold and need to guess higher.<h3>")
	}
	if($absDiff>15 && $absDiff<=25 && $signDiff>0){
		$('.rules').append("<h3>You're cold and need to guess lower.<h3>")
	}
	if($absDiff>15 && $absDiff<=25 && $signDiff<0){
		$('.rules').append("<h3>You're cold and need to guess higher.<h3>")
	}
	if($absDiff<5 && $signDiff>0){
		$('.rules').append("<h3>You're really hot and need to guess lower.<h3>")
	}
	if($absDiff<5 && $signDiff<0){
		$('.rules').append("<h3>You're really hot and need to guess higher.<h3>")
	}
	if($absDiff>=5 && $absDiff<=15 &&  $signDiff>0){
		$('.rules').append("<h3>You're hot and need to guess lower.<h3>")
	}
	if($absDiff>=5 && $absDiff<=15 &&  $signDiff<0){
		$('.rules').append("<h3>You're hot and need to guess higher.<h3>")
	}
	else if ($signDiff==0){
		$('.rules').append("<h3>You got the number!!!.<h3>")
	}
})

});
