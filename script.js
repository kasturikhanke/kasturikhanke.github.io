const customCursor = document.querySelector('.custom-cursor');
const navbarLogo = document.querySelector('.navbar-logo img');

// Function to initiate the spin animation
function spinLogo() {
  navbarLogo.classList.add('spin-once');

  // Remove the spin class after the initial spin
  navbarLogo.addEventListener('animationend', function() {
    navbarLogo.classList.remove('spin-once');
  }, { once: true });
}

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

// Function to check if current page is home and spin logo
function spinLogoIfHome() {
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage === '' || currentPage === 'index.html') {
    spinLogo();
  }
}

window.addEventListener('load', function() {
  spinLogoIfHome();
});

navbarLogo.addEventListener('mouseenter', () => {
  spinLogo(); // Spin on hover
});

document.addEventListener('DOMContentLoaded', function() {
  const navContainer = document.querySelector('.bottom-nav-container');
  const navButtons = document.querySelectorAll('.bottom-nav-button');
  
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

    highlight.style.width = `${highlightWidth}px`;
    
    if (animate) {
      highlight.style.transition = 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)';
      highlight.style.transform = `translateX(${highlightLeft}px)`;
    } else {
      highlight.style.transition = 'none';
      highlight.style.transform = `translateX(${highlightLeft}px)`;
      // Force a reflow to ensure the transition is applied on the next frame
      highlight.offsetHeight;
      highlight.style.transition = 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)';
    }
  }

  // Function to set the active button based on the current page
  function setActiveButtonBasedOnPage() {
    const currentPage = window.location.pathname.split('/').pop();
    let activeButton;

    switch(currentPage) {
      case 'index.html':
      case '':
        activeButton = document.querySelector('.bottom-nav-button[data-page="home"]');
        break;
      case 'craft.html':
        activeButton = document.querySelector('.bottom-nav-button[data-page="craft"]');
        break;
      // Add more cases for other pages as needed
      default:
        activeButton = document.querySelector('.bottom-nav-button[data-page="home"]');
    }

    if (activeButton) {
      setActiveButton(activeButton, false);
    }
  }

  // Set initial active state based on the current page
  setActiveButtonBasedOnPage();

  // Handle button clicks
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      setActiveButton(this, true);  // Set to true to animate the transition
      
      // Navigation logic
      const page = this.getAttribute('data-page');
      if (page === 'home') {
        window.location.href = 'index.html';
        // Logo will spin when the page loads
      } else if (page === 'craft') {
        window.location.href = 'craft.html';
      } else if (page === 'work') {
        // Add the correct URL for the work page when it's ready
        console.log('Work page not implemented yet');
      }
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