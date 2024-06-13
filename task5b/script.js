document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

  if (username && password && email && dob) {
    let userData = {
      username: username,
      password: password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup successful! You can now log in.");
    window.location.href = "signin.html";
  } else {
    alert("Please fill in all fields.");
  }
});
