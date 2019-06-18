var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#sp1");
var p1Score = 0;
var p2Display = document.querySelector("#sp2");
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span"); //selecting a span inside the paragraph

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		p1Display.textContent = p1Score;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
			
		}
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver)
	{
		p2Score++;
		p2Display.textContent = p2Score;
		if(p2Score === winningScore)
		{
			p2Display.classList.add("winner");
			gameOver = true;
		}
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;//because numInput output comes as a string and we need a number
	winningScore = Number(this.value);
	reset();
});

