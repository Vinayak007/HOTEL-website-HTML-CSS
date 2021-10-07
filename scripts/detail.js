//Checkpoint 12
imageFirst();
mainLoad();

// load all the image to slide 
function imageFirst(){    
    var cid = localStorage.getItem("LoName");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://travel-advisor.p.rapidapi.com/photos/list?location_id=${cid}`, true);
    xhr.setRequestHeader("x-rapidapi-key", "e703660292mshbe05f7f4ff101d7p1bd5f8jsnf776563c9ce9");
    xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
           var detail = JSON.parse(xhr.responseText);
           console.log(detail);

         let p1= document.getElementById("first-image");
         let p2 = document.getElementById("second-image");
         let p3 = document.getElementById("third-image");
         let p4 = document.getElementById("fourth-image");
         let p5 = document.getElementById("fifth-image");
         let p6 = document.getElementById("sixth-image");
         let ur = localStorage.getItem("LinkName");
         p1.src=`${ur}`;
         p2.src=`${detail.data[0].images.original.url}`;
         p3.src=`${detail.data[1].images.original.url}`;
         p4.src=`${detail.data[2].images.original.url}`;
         p5.src=`${detail.data[3].images.original.url}`;
         p6.src=`${detail.data[4].images.original.url}`;
      }
    }
}

// loads all the details of the SELECTED hotel
function mainLoad(){
    var gid = localStorage.getItem("LoName");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${gid}`, true);
    xhttp.setRequestHeader("x-rapidapi-key", "e703660292mshbe05f7f4ff101d7p1bd5f8jsnf776563c9ce9");
    xhttp.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
           var response = JSON.parse(xhttp.responseText);

           var v = document.getElementById("discription-div");
           console.log(response);
           var ad = response.data[0].address;
           var na = response.data[0].name;
           localStorage.setItem("Address",ad);
           localStorage.setItem("Name",na);
            
           for(let i =0;i<response.data[0].amenities.length;i++){
            console.log(response.data[0].amenities[i].name);
         }

            //template literal->[1]
           var t =`  <h2>${response.data[0].name}</h2>
           <h5><span>RATINGS</span></h5>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
             </svg>
              <p>${response.data[0].rating}</p>
          <h5><span>AMENITIES</span></h5>         
   <ul>
        <li>${response.data[0].amenities[0].name}</li>
        <li>${response.data[0].amenities[1].name}</li>
        <li>${response.data[0].amenities[2].name}</li>
        <li>${response.data[0].amenities[3].name}</li>
        <li>${response.data[0].amenities[4].name}</li>
   </ul> 
        <h5><span>DESCRIPTION</span></h5>          <!--span-->
        <p>
        ${response.data[0].description};
        </p> `;
         
        v.innerHTML=t;

      }
   }
}

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

// change to payment.html FILE 
function payDetail(){
   
    let fd = document.getElementById("f-date").value;
    let td = document.getElementById("t-date").value;
    let p = document.getElementById("p-number").value;
    let to = document.getElementById("total").value;
    let n = document.getElementById("name").value;
    
    let f_day = new Date(fd);
    let d_day = new Date(td);

 
    let Num =d_day.getTime()- f_day.getTime();
    let dif =Num/(1000*3600*24);

    
    localStorage.setItem("na",n);                          // setting local storage
    localStorage.setItem("ad",p);
    localStorage.setItem("fd",fd);
    localStorage.setItem("td",td);
    localStorage.setItem("ng",dif);
    localStorage.setItem("to",to);
    window.location.href="payment.html";

}