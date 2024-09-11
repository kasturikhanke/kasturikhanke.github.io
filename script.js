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

document.addEventListener('DOMContentLoaded', function() {
  const navContainer = document.querySelector('.bottom-nav-container');
  const navButtons = document.querySelectorAll('.bottom-nav-button');
  const homeButton = document.querySelector('.bottom-nav-button[data-page="home"]');
  
  // Create a highlight element
  const highlight = document.createElement('div');
  highlight.classList.add('nav-highlight');
  navContainer.appendChild(highlight);

  // Function to set active state and move highlight
  function setActiveButton(button, animate = true) {
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    updateHighlight(button, animate);
  }

  // Function to update highlight position and size
  function updateHighlight(button, animate = true) {
    const buttonRect = button.getBoundingClientRect();
    const containerRect = navContainer.getBoundingClientRect();
    
    const highlightWidth = buttonRect.width - 10; // Adjust for padding
    const highlightLeft = buttonRect.left - containerRect.left;

    if (animate) {
      highlight.style.transition = 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)';
    } else {
      highlight.style.transition = 'none';
    }

    highlight.style.width = `${highlightWidth}px`;
    highlight.style.transform = `translateX(${highlightLeft}px)`;
  }

  // Set initial active state without animation
  if (homeButton) {
    setActiveButton(homeButton, false);
  }

  // Handle button clicks
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      setActiveButton(this);
    });
  });

  // Update highlight on window resize
  window.addEventListener('resize', function() {
    const activeButton = document.querySelector('.bottom-nav-button.active');
    if (activeButton) {
      updateHighlight(activeButton, false);
    }
  });
});