//Checkpoint 11

//Calulating Today Date
var today = new Date();   
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10){dd='0'+dd;} 
if(mm<10){mm='0'+mm;} 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("f-date").setAttribute("min", today);
document.getElementById("t-date").setAttribute("min", today);          

// calculate booking amount per person
function calculate(){  
 let fd = document.getElementById("f-date").value;
 let td = document.getElementById("t-date").value;
 let person = document.getElementById("p-number").value;
 
 let f_day = new Date(fd);
 let d_day = new Date(td);

 
 let Num =d_day.getTime()- f_day.getTime();
 let dif =Num/(1000*3600*24);

 
 let Total = 1000*dif*person;
 
 if(person!=""&&td!=""){       //condition
 let readme = document.getElementById("total");
 readme.value="Rs "+Total;             
 }
}