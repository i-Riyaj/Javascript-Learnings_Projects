
// navbar when clicking on threeBars
const showNavbar = () => {
    const navLinks = document.querySelector('.nav-links');
    // Check if the navLinks element is hidden
    if (navLinks.style.visibility === 'hidden') {
        navLinks.style.visibility = 'visible';
    } else {
        navLinks.style.visibility = 'hidden';
    }
}

// change color when 'Click Me' button is clicked
const colors = ['orange','#CAF4FF','rgb(197, 232, 181)','hsl(360°, 90%, 47%)'];
const changeColor = () => {
    // generating a random no between 0 & length of colors
    const randomNo = Math.floor(Math.random()*colors.length);

    // setting color name as textContent of the field with id #colorText 
    document.getElementById('colorText').textContent = colors[randomNo];

    // changing background of body
    document.body.style.background = colors[randomNo];
}