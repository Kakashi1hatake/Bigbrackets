function todolist(){
	var item = document.getElementById('txt').value;
	var text =document.createTextNode(item);
	var newItem=document.createElement("li");
	newItem.appendChild(text);
	document.getElementById("todol").appendChild(newItem);
	txt.value="";


	
	
	
}