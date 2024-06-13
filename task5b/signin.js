document.getElementById('signinForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let username = document.getElementById('signinUsername').value;
    let password = document.getElementById('signinPassword').value;

    let storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && username === storedUserData.username && password === storedUserData.password) {
        sessionStorage.setItem('loggedInUser', username);
        alert('Login successful!');
        window.location.href = 'protected.html';
    } else {
        alert('Invalid username or password.');
    }
});
