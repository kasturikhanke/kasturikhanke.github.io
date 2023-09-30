const customCursor = document.querySelector('.custom-cursor');

// Function to set the initial position of the cursor
function setInitialCursorPosition() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  customCursor.style.left = `${centerX}px`;
  customCursor.style.top = `${centerY}px`;
}

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

window.addEventListener('load', function() {
  var isMobile = window.innerWidth <= 767;

  if (isMobile) {
    var logoImage = document.querySelector('.navbar-logo img');
    logoImage.classList.add('spin-once');

    // Remove the spin class after the initial spin
    logoImage.addEventListener('animationend', function() {
      logoImage.classList.remove('spin-once');
    });
  }

  // Set the initial position of the cursor
  setInitialCursorPosition();
});

// Reset cursor position on window resize
window.addEventListener('resize', setInitialCursorPosition);

