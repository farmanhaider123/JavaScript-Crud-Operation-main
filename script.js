var selectedRow=null ;
var count=1;
function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        
       var inp=document.getElementById("productCode").value;
        if (inp==""){
            alert("Plaese Enter Task");
		}
        else if (inp!=null && selectedRow==null){
           
            insertNewRecord(formData);
             Count++;
		}
        else{
            updateRecord(formData);
        }
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
   
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
   
    cell1 = newRow.insertCell(0);
	cell1.innerHTML=count;
    
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productCode;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[1].innerHTML;
  
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = count;
    selectedRow.cells[1].innerHTML = formData.productCode;
    
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("productCode").value = '';
    document.getElementById("product").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}
