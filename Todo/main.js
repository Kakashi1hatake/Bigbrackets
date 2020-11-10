function onFormSubmit(e){
	e.preventDefault()
	var formData={}
	formData['title']=document.getElementById('title').value
	var table= document.getElementById('data')
	var row=table.insertRow()
	cell1=row.insertCell(0);
	cell1.innerText=formData.title
	cell1=row.insertCell(1);
	cell1.innerHTML=`<button onclick="onDelete(this)">Delete</button>`
}
function onDelete(td)
{
	var rowToBeDeleted=td.parentElement.parentElement
	document.getElementById('data').deleteRow(rowToBeDeleted.rowIndex)
}