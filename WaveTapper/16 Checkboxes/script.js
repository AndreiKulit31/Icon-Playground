const iconGrid = document.querySelector('.icon-grid');

// 1. Prevent focused checkboxes from eating the Spacebar press
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('click', (e) => e.target.blur());
});

// 2. Listen for the Spacebar press to toggle visibility
window.addEventListener("keydown", (event) => {
  if (event.key === " " || event.code === "Space") {
    event.preventDefault(); // Stop page scrolling

    // 3. Flip between hidden ('none') and visible ('grid')
    if (iconGrid.style.display === 'none') {
      iconGrid.style.display = 'grid'; 
    } else {
      iconGrid.style.display = 'none'; 
    }
  }
}, true);
