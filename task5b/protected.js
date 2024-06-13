document.addEventListener('DOMContentLoaded', function() {
    let loggedInUser = sessionStorage.getItem('loggedInUser');
    let storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (loggedInUser && storedUserData) {
        document.getElementById('welcomeMessage').innerText = `Hello, ${storedUserData.username}`;
        document.getElementById('userEmail').innerText = storedUserData.email;
        document.getElementById('userDob').innerText = storedUserData.dob;
        document.getElementById('protectedContent').style.display = 'block';
    } else {
        alert('You are not logged in.');
        window.location.href = 'signin.html';
    }

    document.getElementById('signOutButton').addEventListener('click', function() {
        sessionStorage.removeItem('loggedInUser');
        alert('You have been signed out.');
        window.location.href = 'signin.html';
    });
});
