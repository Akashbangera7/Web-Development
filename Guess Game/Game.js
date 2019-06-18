//create a secret number
var secretKey = 4;
//ask users to guess a number
var guess = Number(prompt("Guess the number"));
//check if the guess is right
if(guess === secretKey)
{
	alert("You got it right");
}
//check if the guess is higher
else if(guess > secretKey )
{
	alert("too high!!!!guess again");
}
//else check if its lower
else
{
	alert("too low!!guess again");
}