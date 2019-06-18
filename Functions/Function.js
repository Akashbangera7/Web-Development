//Check if the number is even or odd

 function isEven(num)
 {
	 return num % 2 === 0;
	 
 }
 
 //Calling the function
 isEven(4);
 isEven(21);
 isEven(68);
 isEven(333);
 
 
 //Factorial of a number
 
 function factorial(num)
 {
	 var fact = 0;
	 if(num === 0)
	 {
		 return 1;
	 }
	 else
	 {
		 fact = num * factorial(num -1);
	 }
	 return fact;
 }
 
 //calling
 
 factorial(0);
 factorial(5);
 
 
 
// OR

function factorial(num)
{
	if(num === 0)
	{
		return 1;
	}
	var result = num;
	for (var i = num -1; i >= 1; i--)
	{
		result *= i;
	}
	return result;
}

 
 
 //kebab to snake
 //write a function which takes a single kebab-cased string argument and returns snake_cased version
 //basically replace "-" with "_"
 
 function kebabToSnake(str)
 {
	 return str.replace(/-/g, "_");
 }
 
 kebabToSnake("hello-world");
 kebabToSnake("dogs-are-awesome");
 kebabToSnake("blah");