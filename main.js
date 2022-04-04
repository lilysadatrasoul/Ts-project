

//  let row_number = 1;

// function addRow () {
  
//        var table = document.getElementById("table");
//        var row = table.insertRow();

//        var cell1 = row.insertCell(0);
//        cell1.innerHTML = row_number;

//        var cell2 = row.insertCell(1); 
//        var element2 = document.createElement("input");
// 			 element2.type = "text";
// 			 element2.name = "txtbox[]";
// 			 cell2.appendChild(element2);

//        var cell3 = row.insertCell(2);  
//         var element3 = document.createElement("input");
// 			 element3.type = "text";
// 			 element3.name = "txtbox[]";
// 			 cell3.appendChild(element3);

//        var cell4 = row.insertCell(3);  
//        var element4 = document.createElement("input");
// 			 element4.type = "text";
// 			 element4.name = "txtbox[]";
// 			 cell4.appendChild(element4);

//        var cell5 = row.insertCell(4);  
//        var element5= document.createElement("input");
// 			 element5.type = "text";
// 			 element5.name = "txtbox[]";
// 			 cell5.appendChild(element5);


//        var cell6 = row.insertCell(5);
//        var element6 = document.createElement("button");
// 			 element6.type = "button";
// 			 element6.name="edit";
//        element6.innerHTML = "ویرایش";
//        element6.style.width=`50px`;
//        element6.style.height=`20px`;
// 			 cell6.appendChild(element6);  

//        var cell7 = row.insertCell(6); 
//        var element7 = document.createElement("button");
// 			 element7.type = "button";
// 			 element7.name="delete";
//        element7.innerHTML = "حذف";
//        element7.style.width=`50px`;
//        element7.style.height=`20px`;
// 			 cell7.appendChild(element7);

//        var cell8 = row.insertCell(7);  
//        var element8= document.createElement("button");
// 			 element8.type = "button";
// 			 element8.name = "save";
//        element8.innerHTML = "ذخیره";
//        element8.style.width=`50px`;
//        element8.style.height=`20px`;
// 			 cell8.appendChild(element8); 
      
//   row_number += 1;




  // element8.addEventListener('click', () => {
    
  //   let person= {
  //     name :cell2.innerHTML,
  //     country : cell3.innerHTML,
  //     age: cell4.innerHTML,
  //     city :cell5.innerHTML,
  //   }
  //   console.log(person)
  // });


// }



// var cell = document.getElementsByTagName('td');
// for (var i=2; i<6; i++) {
//    cell[i].onclick = function() {
//       var data = this.getAttribute('data-cell');
//       editEvent = document.getElementById('addevent');//The pop-up window
//       editEvent.style.cssText ='display: block;';
//       this.style.position = 'relative';

//       this.innerHTML = " "//??? I want the inputs data to be inserted here





// class person {
//   constructor(name, city, country, age) {
//      this.Name = document.getElementById(`name`);
//      this.city = document.getElementById(`city`);
//      this.country = document.getElementById(`country`);
//      this.age = document.getElementById(`age`);
//   }

// }




const formElement= document.querySelector("form")
const tbodyElement= document.querySelector("tbody")
const tableElement = document.querySelector(`table`)
let data=[]
let rowNumber=1

function addingProfile(e){
  e.preventDefault();

  let person = {
    name :document.getElementById(`name`).value,
    city :document.getElementById(`city`).value,
    country :document.getElementById(`country`).value,
    age :document.getElementById(`age`).value
    };

   data.push(
    person
       );

    addRow(person);
  }

 function addRow (r){    

  tbodyElement.innerHTML+=`
      <tr>
      <td style="width:5%"> ${rowNumber} </td>
      <td style="width:20%">${r.name} </td>
      <td style="width:15%"> ${r.city} </td>
      <td style="width:15%"> ${r.country} </td>
      <td style="width:8%"> ${r.age} </td>
      <td  style="width:3%"><button class="DeleteBtn" style="border:none">حذف</button></td>
      <td  style="width:3%"><button class="EditBtn" style="border:none" >ویرایش</button></td>
      </tr>  
  `;
  rowNumber+=1;
}

function deleteRow(e){
  if(!e.target.classList.contains("DeleteBtn")){
    return;
  }
  e.target.closest("tr").remove();

}
function editRow(e){
  if(!e.target.classList.contains("EditBtn")){
    return;
  } 
  else if (e.target.textContent==="ویرایش"){
  document.getElementById(`name`).value= e.target.closest("tr").children[1].innerHTML;
  document.getElementById(`city`).value=e.target.closest("tr"). children[2].innerHTML;
  document.getElementById(`country`).value=e.target.closest("tr").children[3].innerHTML;
  document.getElementById(`age`).value=e.target.closest("tr").children[4].innerHTML;
  e.target.textContent="ذخیره";
  }
  else if (e.target.textContent==="ذخیره"){
  e.target.closest("tr").children[1].innerHTML=  document.getElementById(`name`).value;
  e.target.closest("tr"). children[2].innerHTML= document.getElementById(`city`).value;
  e.target.closest("tr").children[3].innerHTML=document.getElementById(`country`).value;
  e.target.closest("tr").children[4].innerHTML=document.getElementById(`age`).value;
  e.target.textContent="ویرایش";
  }


}


formElement.addEventListener("submit",addingProfile);
tableElement.addEventListener("click", deleteRow );
tableElement.addEventListener("click", editRow );




