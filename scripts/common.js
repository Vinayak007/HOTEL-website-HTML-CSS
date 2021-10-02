//Checkpoint 11

loginTemplateCall();
footerTemplateCall();

// template for login
function loginTemplateCall(){
    var logintemplate =` <div id="login"> 
      
    <div class="modal-title">
                        <h4>Please Login</h4>
                        <button type="button" onclick="closeModal()">&times;</button>
    </div>
    <div class="modal-body">
                        <div class="modal-row">
                             <label for="username">Username:</label>
                             <input type="text" id="username">
                        </div>
                        <div class="modal-row">
                             <label for="password">Password:</label>
                             <input type="password" id="password">
                        </div>
    </div>   
    <div class="modal-footer">
                        <button type="button" id="submit" onclick="changeModal()">Submit</button>
    </div>   

</div>;`;

document.getElementById("login-modal").innerHTML=logintemplate;
    
}


//open modal
function openModal(){                                                  
    let s = document.getElementById("Sup");
    let modal = document.getElementsByClassName("login-modal");
    var userNameStored= document.getElementById("username");
    var passWordStored = document.getElementById("password");

    if(s.innerHTML==="LOG Out"){
    modal[0].style.display = "none";
    s.innerHTML="LOG In";
    localStorage.clear();
    document.getElementById("payNow-button").disabled=true;
    }
    else{
        modal[0].style.display = "block";
        userNameStored.value="";
        passWordStored.value="";
    }
}

// close modal
function closeModal(){                                                        
    let modal = document.getElementsByClassName("login-modal");
    modal[0].style.display = "none";
}


//local Storage & LOGOUT & close modal
function changeModal(){  
    let sb = document.getElementById("Sup");
    let modal = document.getElementsByClassName("login-modal");
    
    sb.innerHTML="LOG Out";
    modal[0].style.display = "none";
    document.getElementById("payNow-button").disabled=false;
    var userNameStored= document.getElementById("username").value;
    var passWordStored = document.getElementById("password").value;

    localStorage.setItem('username',userNameStored);
    localStorage.setItem('password',passWordStored);

    alert("Successfully entered");
}


 // open contact
function openContact(){
    var e = document.getElementById("email");
    var m = document.getElementById("contact-modal");
    m.style.display = "block";
    e.value="";
}

//close contact
function closeContact(){
    var m = document.getElementById("contact-modal");
    m.style.display = "none";
}

// template for footer
function footerTemplateCall(){
    var footerTemplate=` <button id="con" class=" btn btn-info btn-sm" onclick="openContact()">Contact Us</button>
    <!-- MODAL for COnatact -->
    <div class="Contact-modal modal" id="contact-modal">
         <div id="contact"> 
       
             <div class="modal-title">
                 <h4>Get in touch</h4>
                 <button type="button" onclick="closeContact()">&times;</button>
             </div>
 
             <div class="modal-body">
                <h5>Thank you for reaching out!!!</h5>
                <h5>Please enter your email and we will get back to you</h5>
                 <div class="modal-row">
                     <label for="email">Email:</label>
                     <input type="email" id="email" placeholder="Enter Your email">
                 </div>
            </div>   
            
            <div class="modal-footer">
                    <button type="button" id="submit" onclick="closeContact()">Submit</button>
            </div>   
             
         </div>;
     </div>


     <div id="copyRight"> 
     &copy; 2020 ROOM SERACH PVT LTD
     </div>

     <div id="social">    
     <img id="SocialMedia" src="C:\Users\hkart\OneDrive\Documents\Hotel_Booking_Website_Starter_Code\assests\images\facebook.png">
     <img id="SocialMedia" src="C:\Users\hkart\OneDrive\Documents\Hotel_Booking_Website_Starter_Code\assests\images\instagram.png">
     <img id="SocialMedia" src="C:\Users\hkart\OneDrive\Documents\Hotel_Booking_Website_Starter_Code\assests\images\twitter.png">
     </div>`;
    var f = document.getElementById("footer");
    f.innerHTML=footerTemplate;

} 