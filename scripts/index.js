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
