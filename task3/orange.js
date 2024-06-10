let email = document.getElementById("email");
let message = document.getElementById("emailHelp");
let form = document.getElementById("form");
let mobile = document.getElementById("mobile");
let message1 = document.getElementById("mobileHelp");
let password = document.getElementById("Password");
let message2 = document.getElementById("passwordHelp");
let check1 = document.getElementById("Check1");
let check2= document.getElementById("Check2")

form.addEventListener("submit", function (event) {
    event.preventDefault();
  let emailvalidation = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  let result = emailvalidation.test(email.value);
  
   if (result) {message.innerHTML = " valid";
    message.style.color = "green"; }
  else  {
    message.innerHTML = " notvalid";
    message.style.color = "red";
  }


  let mobilevalidation = /^077\d{7}$/;
  let result1 = mobilevalidation.test(mobile.value);
  
    if (result1) {
    message1.innerHTML = " valid";
    message1.style.color = "green";
  } else {
    message1.innerHTML = " notvalid";
    message1.style.color = "red";
  }

  let Passwordvalidation =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()])[A-Za-z\d!@#$%^&()]{6,18}$/
  let result3 = Passwordvalidation.test(password.value);
  if (result3 && check1.checked && check2.checked) {
    message2.innerHTML = " valid password";
    message2.style.color = "green";
  } else {
    message2.innerHTML = " not valid password";
    message2.style.color = "red";
  }
  if (check1.checked && check2.checked) { 
    
} else {
}
});

