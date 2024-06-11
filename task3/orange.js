let name = document.getElementById("fname");
let message4 = document.getElementById("nameHelp");
let email = document.getElementById("email");
let message = document.getElementById("emailHelp");
let form = document.getElementById("form");
let mobile = document.getElementById("mobile");
let message1 = document.getElementById("mobileHelp");
let password = document.getElementById("Password");
let message2 = document.getElementById("passwordHelp");
let password2 = document.getElementById("Password11");
let message5 = document.getElementById("password11Help");

let check1 = document.getElementById("Check1");
let check2 = document.getElementById("Check2");
let errtext = document.getElementById("errtext");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let fnamevalidation = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let result4 = fnamevalidation.test(fname.value);
  if (result4) {
    message4.innerHTML = " valid name";
    message4.style.color = "green";
  } else {
    message4.innerHTML = "  notvalid name";
    message4.style.color = "red";
  }
  let emailvalidation = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  let result = emailvalidation.test(email.value);

  if (result) {
    message.innerHTML = " valid";
    message.style.color = "green";
  } else {
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
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()])[A-Za-z\d!@#$%^&()]{6,18}$/;
  let result3 = Passwordvalidation.test(password.value);
  if (result3) {
    message2.innerHTML = " valid password";
    message2.style.color = "green";
  } else {
    message2.innerHTML = " not valid password";
    message2.style.color = "red";
  }
  if (password2.value != password.value) {
    message5.innerHTML = "incorrect password";
    message5.style.color = "red";
  } else {
    message5.innerHTML = "valid";
    message5.style.color = "green";
  }

  if (!check1.checked || !check2.checked) {
    errtext.style.display = "block";


  }
  if (result && result1 && result3 && check1.checked && check2.checked && password2.value === password.value) {
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", password.value);
    localStorage.setItem("fname", fname.value);
  }
});
