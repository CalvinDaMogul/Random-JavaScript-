var randomNumber = getRandomNmber(10);
var guess;
var guessCount = 0;

function getRandomNmuber( upper ) {
	var num = Math.floor(Math.random() * upper) + 1;
	return num;
}