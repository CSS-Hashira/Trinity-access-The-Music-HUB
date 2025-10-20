const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const images = [
  "CSS/Images/guitar.png",
  "CSS/Images/drum1.png",
  "CSS/Images/piano.png",
  "CSS/Images/concert1.png",
];

let index = 0;
const content = document.querySelector(".bg-container");

// Function to change background image
function changeBackground() {
  content.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length; // loop back to first image
}

// Initial image
changeBackground();

// Change every 4 seconds
setInterval(changeBackground, 4000);

// Cards
// Horizontal scroll for instruments section

 const scrollContainer = document.querySelector('.cards-container');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  // Scroll amount per click
  const scrollAmount = 350;

  rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });


