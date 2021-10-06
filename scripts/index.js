//Checkpoint 11

// View More--View Less
 function ViewMoreFunction(){
       
   var b = document.getElementById("view-button");
   var c = document.getElementsByClassName("city-container-2");

   if(b.innerHTML==="View More"){
       b.innerHTML="View Less";
       for(var i=0; i<c.length; i++) 
        c[i].style.display='block';
    }
   else{
       b.innerHTML="View More";
       for(var i=0; i<c.length; i++) 
        c[i].style.display='none';
   }
}

// 8 function is gettting called respectively on Click by (any) CityCards
function c1(){
    let cid  = document.getElementById("city1").innerText;
    localStorage.setItem("City",cid);    
    window.location.href="list.html";
}
function c2(){
    let cid  = document.getElementById("city2").innerText;
    localStorage.setItem("City",cid);    
    window.location.href="list.html";
}
function c3(){
    let cid  = document.getElementById("city3").innerText;
    localStorage.setItem("City",cid);    
    window.location.href="list.html";
}
function c4(){
    let cid  = document.getElementById("city4").innerText;
    localStorage.setItem("City",cid);    
    window.location.href="list.html";
}
function c5(){
    let cid  = document.getElementById("city5").innerText;
    localStorage.setItem("City",cid);    
    window.location.href="list.html";
}
function c6(){
    let cid  = document.getElementById("city6").innerText;
    localStorage.setItem("City",cid);    
    window.location.href="list.html";
}
function c7(){
    let cid  = document.getElementById("city7").innerText;
    localStorage.setItem("City",cid);    
    window.location.href="list.html";
}
function c8(){
    let cid  = document.getElementById("city8").innerText;
    localStorage.setItem("City",cid);    
    window.location.href="list.html";
}