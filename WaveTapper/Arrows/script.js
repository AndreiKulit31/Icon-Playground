const iconElement = document.getElementById('arrow');

// 1. Create a Set to track currently pressed keys
const pressedKeys = new Set();

// 2. Include ' ' (Spacebar) in the allowed keys list
window.addEventListener('keydown', function(event) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) {
        pressedKeys.add(event.key);
        updateIcon();
    }
});

// 3. Remove keys when released and update
window.addEventListener('keyup', function(event) {
    pressedKeys.delete(event.key);
    updateIcon();
});

function updateIcon() {
    // 4. Check for Spacebar first so it overrides everything else
    if (pressedKeys.has(' ')) {
        iconElement.innerText = '';
        if (iconGrid.style.display === 'none') {
          iconGrid.style.display = 'grid'; 
        } else {
          iconGrid.style.display = 'none'; 
        }
        return; 
    }

    // 5. If no keys are pressed, change nothing and exit early
    if (pressedKeys.size === 0) return; 

    const hasUp = pressedKeys.has('ArrowUp');
    const hasDown = pressedKeys.has('ArrowDown');
    const hasLeft = pressedKeys.has('ArrowLeft');
    const hasRight = pressedKeys.has('ArrowRight');

    // --- DIAGONALS ---
    if (hasUp && hasLeft) { iconElement.innerText = 'north_west'; }
    else if (hasUp && hasRight) { iconElement.innerText = 'north_east'; }
    else if (hasDown && hasLeft) { iconElement.innerText = 'south_west'; }
    else if (hasDown && hasRight) { iconElement.innerText = 'south_east'; }
    
    // --- SINGLE KEYS ---
    else if (hasUp) { iconElement.innerText = 'arrow_upward'; }
    else if (hasDown) { iconElement.innerText = 'arrow_downward'; }
    else if (hasLeft) { iconElement.innerText = 'arrow_back'; }
    else if (hasRight) { iconElement.innerText = 'arrow_forward'; }
}
