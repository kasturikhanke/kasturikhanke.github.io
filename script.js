const customCursor = document.querySelector('.custom-cursor');
const navbarLogo = document.querySelector('.navbar-logo img');

// Function to set the initial position of the cursor
function setInitialCursorPosition() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  customCursor.style.left = `${centerX}px`;
  customCursor.style.top = `${centerY}px`;
}

// Function to initiate the spin animation
function spinLogo() {
  navbarLogo.classList.add('spin-once');

  // Remove the spin class after the initial spin
  navbarLogo.addEventListener('animationend', function() {
    navbarLogo.classList.remove('spin-once');
  });
}

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

window.addEventListener('load', function() {
  var isMobile = window.innerWidth <= 767;

  if (isMobile) {
    spinLogo(); // Spin on mobile
  } else {
    spinLogo(); // Spin on desktop
  }

  // Set the initial position of the cursor
  setInitialCursorPosition();
});

navbarLogo.addEventListener('mouseenter', () => {
  spinLogo(); // Spin on hover
});

// Reset cursor position on window resize
window.addEventListener('resize', setInitialCursorPosition);

