var todos = ["Akash"];
var input = prompt("What would you like to do?");
while(input !== "quit")
	{
		if(input === "list")
			{
				listTodos();
			}else if(input === "new")
				{
					addTodo();
	
				}else if(input === "delete")
					{
						deleteTodo();
					}
				input = prompt("what would you like to do?");
	}
	console.log("OK, You quit the app");


function listTodos(){
	console.log("**********");
	todos.forEach(function(todo,index)
	{
		console.log(index+ ": " +todo);
	});
	console.log("**********");
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added todo");
}

function deleteTodo(){
	var i = prompt("Enter the index of the todo to be deleted");
	todos.splice(i,1);	
	console.log("Deleted todo");
}