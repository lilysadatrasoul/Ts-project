

let row_number = 1

function addRow () {
  var table = document.getElementById("table");

 var row = table.insertRow();

 var cell1 = row.insertCell(0);
 cell1.innerHTML = row_number;
 var cell2 = row.insertCell(1);  
 cell2.innerHTML = "";
 var cell3 = row.insertCell(2);  
 cell3.innerHTML = "";
 var cell4 = row.insertCell(3);  
 cell4.innerHTML = "";
 var cell5 = row.insertCell(4);  
 cell5.innerHTML = "";
 var cell6 = row.insertCell(5);  
 cell6.innerHTML = "";
 var cell7 = row.insertCell(6);  
 cell7.innerHTML = "";

 row_number += 1;

 if(row_number >= 10)
 {

 }
}





