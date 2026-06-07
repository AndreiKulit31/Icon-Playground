const container = document.querySelector('#container');

// These variables keep track of what you are clicking and dragging
let selectedIcon = null;
let currentDraggingIcon = null;
let offsetX = 0;
let offsetY = 0;

// ==========================================
// 1. CLICK TO SELECT & DRAG (Handles Old & Cloned Icons)
// ==========================================
document.addEventListener('mousedown', (e) => {
    // Check if the clicked element is a material icon
    if (e.target.classList.contains('material-symbols-outlined')) {
        
        // Visual indicator: Remove 'selected' style from previous icon, add to this one
        if (selectedIcon) selectedIcon.style.outline = 'none'; 
        selectedIcon = e.target;
        selectedIcon.style.outline = '2px dashed #007bff'; // Optional: highlights selected icon

        // Setup dragging variables
        currentDraggingIcon = e.target;
        offsetX = e.clientX - currentDraggingIcon.getBoundingClientRect().left;
        offsetY = e.clientY - currentDraggingIcon.getBoundingClientRect().top;
    }
});

// Move the icon with your mouse
document.addEventListener('mousemove', (e) => {
    if (!currentDraggingIcon) return;
    currentDraggingIcon.style.left = `${e.clientX - offsetX}px`;
    currentDraggingIcon.style.top = `${e.clientY - offsetY}px`;
});

// Release the icon when mouse is up
document.addEventListener('mouseup', () => {
    currentDraggingIcon = null;
});

// ==========================================
// 2. CLONE SELECTED ICON ON "C" KEYPRESS
// ==========================================
window.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'c') {
    
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
      return; 
    }

    if (!selectedIcon) {
      console.warn("Click an icon first before pressing 'C' to clone it.");
      return;
    }

    const clone = selectedIcon.cloneNode(true);

    clone.removeAttribute('id'); 
    clone.classList.add('cloned-element');
    clone.style.outline = 'none'; 

    // 🌟 SMART POSITION FIX:
    // This reads the actual computed position on the screen, relative to the #container
    const containerRect = container.getBoundingClientRect();
    const iconRect = selectedIcon.getBoundingClientRect();

    const currentLeft = iconRect.left - containerRect.left;
    const currentTop = iconRect.top - containerRect.top;

    // Offset the clone by 30px down and right
    clone.style.left = `${currentLeft + 30}px`; 
    clone.style.top = `${currentTop + 30}px`;

    container.appendChild(clone);
  }
});
