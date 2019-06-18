
//var isPink = false;
//button.addEventListener("click",function changeColor(){
	//if(isPink)
	//{
	//	body.style.background = "white";
		
	//}else{
	//	body.style.background = "pink";
		
	//}
	//isPink = !isPink;
	//});
	

var button = document.querySelector("button");
var isPink = false;
button.addEventListener("click", function()
{
	document.body.classList.toggle("pink");
});