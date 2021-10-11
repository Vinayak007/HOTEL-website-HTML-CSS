// Checkpoint 13

$(window).on('load',function(){                      //LOADER activated before WEB API gets loaded
    $("#loader-div").fadeOut(3000);
    $("#main-div").fadeIn(1000);
});
imageLoad();
temp1();

// using template literal property
function temp1(){
    var a =localStorage.getItem("na");    // using localStorage
    var b = localStorage.getItem("ad");
    var c = localStorage.getItem("fd");
    var d = localStorage.getItem("td");
    var e = localStorage.getItem("ng");
    var f = localStorage.getItem("to");
    var g =localStorage.getItem("Name");
    var h = localStorage.getItem("Address");
    
    //template literal->[1]
    var o =`  <h2>${g}</h2>                             
    <p>${h}</p>`;
    document.getElementById("hotel-info").innerHTML=o;
   
    //template literal->[2]
    var t =` <p><b>Name:</b>${a}</p>                
    <p><b>Number of Adult:</b>${b}</p>
    <p><b>Check-in Date:</b>${c}</p>
    <p><b>Check-out Date:</b>${d}</p>`;
    document.getElementById("discription-1-div").innerHTML=t;
    
    //template literal->[3]
    var t2 =` <p><b>Tariff Breakdown:</b>Rs.1000 x (${b}) Adults x (${e}) Nights</p>
    <p><b>Total Amount:</b>${f}</p>`;
    document.getElementById("discription-2-div").innerHTML=t2;

}
function imageLoad(){
    let p = document.getElementById("RaddisonImage");
    let ur = localStorage.getItem("LinkName");
    p.src=`${ur}`;
}
function letsPAY(){
    alert(`
           Your PAYEMENT has been SUCCESSFULL
          ***********************************
          We Are Glad to Welcome to our FAMILY`);
}