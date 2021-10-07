//Checkpoint 12

ListAllHotel(); // call


// This function gives all the Hotel in A particular to a CITY
function ListAllHotel(){
   
    var cid  = localStorage.getItem("City");    // taking City id from local storage
    var p =document.getElementById("ListView");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `https://travel-advisor.p.rapidapi.com/locations/search?query=${cid}`, true); // GET
    xhttp.setRequestHeader("x-rapidapi-key", "e703660292mshbe05f7f4ff101d7p1bd5f8jsnf776563c9ce9");
    xhttp.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    xhttp.send();
    xhttp.onreadystatechange = function() {                   // readyState
        if (xhttp.readyState == 4 && xhttp.status == 200) {
             var response = JSON.parse(xhttp.responseText);
             var detail = JSON.parse(xhttp.responseText);
             console.log(response);
             var hs ="";
             
          
                for(let i =0;i<response.data.length;i++){
                  if(response.data[i].result_type=="lodging"){
                    localStorage.setItem(response.data[i].result_object.location_id,response.data[i].result_object.photo.images.small.url);
                    hs+=`
                    <div class="hotel-div" onclick="goInDetail(${response.data[i].result_object.location_id})"> 
                          <img class="HotelImage"  src="${response.data[i].result_object.photo.images.small.url}" >
                    
                       <div class="hotel-info">         
                             <h4 id="hotel-name">${response.data[i].result_object.name}</h4>
                           <div class="star">           
                                 <span class="glyphicon glyphicon-star"></span>
                                 <p>${response.data[i].result_object.rating}</p>
                          </div>
                           <h5>${response.data[i].result_object.address}</h5>
                       </div>
                   </div>`;
                    p.innerHTML=hs;
                   
                  }
                 }    
        }
    }
}

function goInDetail(id){

          //console.log("WE GOT here=>"+id);
           localStorage.setItem("LoName",id);
  
          var ul =localStorage.getItem(id);
  
          localStorage.setItem("LinkName",ul);
          window.location.href="detail.html";

}