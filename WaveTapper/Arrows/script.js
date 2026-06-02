const iconElement = document.getElementById('arrow');

// 1. Create an object to track which keys are currently being held down
const pressedKeys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

// 2. When a key is pressed down, set it to true and check combinations
window.addEventListener('keydown', function(event) {
    if (event.key in pressedKeys) {
        pressedKeys[event.key] = true;
        updateIcon(); // Run the check function
    }
});

// 3. CRITICAL: When a key is released, set it back to false
window.addEventListener('keyup', function(event) {
    if (event.key in pressedKeys) {
        pressedKeys[event.key] = false;
        updateIcon(); // Run the check function to revert to single arrows
    }
});

// 4. Function to evaluate key combinations and update the icon text
function updateIcon() {
    // --- DIAGONAL COMBINATIONS (Two keys at once) ---
    if (pressedKeys.ArrowUp && pressedKeys.ArrowLeft) {
        console.log('Up + Left pressed together!');
        iconElement.innerText = 'north_west';
        return; // 'return' stops the function so it doesn't read the single keys below
    }
    if (pressedKeys.ArrowUp && pressedKeys.ArrowRight) {
        console.log('Up + Right pressed together!');
        iconElement.innerText = 'north_east';
        return;
    }
    if (pressedKeys.ArrowDown && pressedKeys.ArrowLeft) {
        console.log('Down + Left pressed together!');
        iconElement.innerText = 'south_west';
        return;
    }
    if (pressedKeys.ArrowDown && pressedKeys.ArrowRight) {
        console.log('Down + Right pressed together!');
        iconElement.innerText = 'south_east';
        return;
    }

    // --- SINGLE KEY COMBINATIONS (Fallback if no diagonals match) ---
    if (pressedKeys.ArrowUp) {
        iconElement.innerText = 'arrow_upward';
    } else if (pressedKeys.ArrowDown) {
        iconElement.innerText = 'arrow_downward';
    } else if (pressedKeys.ArrowLeft) {
        iconElement.innerText = 'arrow_back';
    } else if (pressedKeys.ArrowRight) {
        iconElement.innerText = 'arrow_forward';
    }
}
