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
   
    var t =` <p><b>Name:</b>${a}</p>
    <p><b>Number of Adult:</b>${b}</p>
    <p><b>Check-in Date:</b>${c}</p>
    <p><b>Check-out Date:</b>${d}</p>`;
    document.getElementById("discription-1-div").innerHTML=t;
    
    var t2 =` <p><b>Tariff Breakdown:</b>Rs.1000 x (${b}) Adults x (${e}) Nights</p>
    <p><b>Total Amount:</b>${f}</p>`;
    document.getElementById("discription-2-div").innerHTML=t2;

}
function imageLoad(){
    let p = document.getElementById("RaddisonImage");
   let ur = localStorage.getItem("LinkName");
   p.src=`${ur}`;
}