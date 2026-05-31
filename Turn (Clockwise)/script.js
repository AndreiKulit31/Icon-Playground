const turnElements = document.querySelectorAll('.turn');
let selectedTurn = null; 
const pressedKeys = { ArrowUp: false, ArrowDown: false };

turnElements.forEach((element) => {
    // Left Click: Toggle selection and the spinning state
    element.addEventListener('pointerdown', function(event) {
        if (event.button !== 0) return; // Only process left click

        // TOGGLE OFF: Clicking the active icon pauses it and deselects it
        if (selectedTurn === element) {
            element.classList.remove('selected');
            element.style.animationPlayState = 'paused'; 
            selectedTurn = null;
            return;
        }

        // Clean up previous active icon before switching selection
        if (selectedTurn) {
            selectedTurn.classList.remove('selected');
            selectedTurn.style.animationPlayState = 'paused'; 
        }

        // TOGGLE ON: Activate and run the stepped spin animation
        selectedTurn = element;
        element.classList.add('selected');
        element.style.animationPlayState = 'running'; 
    });

    // Right Click: Wipe completely out of the DOM layout
    element.addEventListener('contextmenu', function(event) {
        event.preventDefault(); 
        if (selectedTurn === element) {
            selectedTurn = null;
        }
        element.remove(); 
    });
});

// Capture keystrokes cleanly
window.addEventListener('keydown', function(event) {
    if (event.key in pressedKeys) pressedKeys[event.key] = true;
});

window.addEventListener('keyup', function(event) {
    if (event.key in pressedKeys) pressedKeys[event.key] = false;
});

// Calculate and move positions smoothly
function updateTurnPositions() {
    if (!selectedTurn) return; 

    // Extract current style or default to the screen's vertical center
    let currentTop = parseFloat(selectedTurn.style.top) || (window.innerHeight / 2 - 100);

    if (pressedKeys.ArrowUp)   currentTop -= 15;
    if (pressedKeys.ArrowDown) currentTop += 15;
    
    selectedTurn.style.top = `${currentTop}px`;
}

// Global Performance Loop
function loop() {
    updateTurnPositions();
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
