document.addEventListener('DOMContentLoaded', (event) => {
    const myDiv = document.getElementById('mydiv');
    
    myDiv.addEventListener('mouseover', () => {
        myDiv.innerText = 'messsssi';
    });
    
    myDiv.addEventListener('mouseout', () => {
        myDiv.innerText = 'مين عمك';
    });
});
