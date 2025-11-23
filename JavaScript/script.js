const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Header hiding 
const navbar = document.querySelector('.navbar');
let idleTimer;

// function to start or reset idle timer
function startIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    navbar.classList.add('hidden');
  }, 2000); // hide after 3 seconds of inactivity
}

// show navbar again when user scrolls or interacts
['scroll', 'mousemove', 'keydown', 'click', 'touchstart'].forEach(evt => {
  window.addEventListener(evt, () => {
    navbar.classList.remove('hidden');
    startIdleTimer();
  });
});

// start timer on page load
startIdleTimer();
