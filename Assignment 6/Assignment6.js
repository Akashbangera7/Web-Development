
function printReverse(a){
	
	for(var i = a.length; i>=0; i--)
	{
		console.log(a[i]);
	}
	
}

function isUniform(arr){
	var first = arr[0];
	for(var i =0; i<arr.length;i++)
	{
		if(arr[i] !== first)
		{
			return false;
		}
	}return true;
}

function sumArray(arr)
{
	var total = 0;
	arr.forEach(function(element){
	total += element;
	});
	return total;
}

function maxArray(arr)
{
	var max = arr[0];
	for(var i = 0; i < arr.length; i++)
	{
		if(max < arr[i])
		{
			max = arr[i];
		}
	}return max;
}





var movies = [{
	title: "In Burgers",
	rating:5,
	hasWatched: false
},
{
	title: "Frozen",
	rating:4.5,
	hasWatched: false
},
{
	title: "Mad Max",
	rating:5,
	hasWatched: true
},
{
	title: "Les Miserable",
	rating:3.5,
	hasWatched: false
}
]

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "Watched ";
	}else{
		result += "Not Seen "
	}
	result += "\"" +movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result);
	
});