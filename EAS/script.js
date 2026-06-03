// Select all material symbol icons
const icons = document.querySelectorAll('.material-symbols-outlined');

icons.forEach(icon => {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // 1. User clicks down on an icon
    icon.addEventListener('mousedown', (e) => {
        isDragging = true;
        
        // Calculate where inside the icon the user clicked
        offsetX = e.clientX - icon.getBoundingClientRect().left;
        offsetY = e.clientY - icon.getBoundingClientRect().top;
    });

    // 2. User moves the mouse across the page
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return; // Ignore movement if mouse isn't clicked down

        // Update the CSS coordinates based on mouse position minus the initial offset
        icon.style.left = `${e.clientX - offsetX}px`;
        icon.style.top = `${e.clientY - offsetY}px`;
    });

    // 3. User releases the mouse button
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});
