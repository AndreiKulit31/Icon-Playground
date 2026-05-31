const wheelchairElements = document.querySelectorAll('.wheelchair');
let selectedWheelchair = null; 
const wheelchairs = [];

wheelchairElements.forEach((element) => {
    // Read the current left offset if it exists, or default to center screen
    const initialLeft = element.offsetLeft || (window.innerWidth / 2 - 75);

    const wheelchairObject = {
        domElement: element,
        xPosition: initialLeft // Tracks horizontal position
    };
    
    wheelchairs.push(wheelchairObject);

    // Left Click: Select the wheelchair
    element.addEventListener('click', function() {
        wheelchairs.forEach(el => el.domElement.classList.remove('selected'));
        selectedWheelchair = wheelchairObject;
        element.classList.add('selected');
    });

    // --- RIGHT CLICK: MAKE DISAPPEAR ---
    element.addEventListener('contextmenu', function(event) {
        event.preventDefault(); 
        
        if (selectedWheelchair === wheelchairObject) {
            selectedWheelchair = null;
        }
        
        element.style.display = 'none';
    });
});

// Track Left and Right arrow keys
const pressedKeys = { ArrowLeft: false, ArrowRight: false };

window.addEventListener('keydown', function(event) {
    if (event.key in pressedKeys) {
        pressedKeys[event.key] = true;
        updateWheelchairs(); 
    }
});

window.addEventListener('keyup', function(event) {
    if (event.key in pressedKeys) { pressedKeys[event.key] = false; }
});

function updateWheelchairs() {
    if (!selectedWheelchair) return; 

    // Adjust xPosition based on key inputs
    if (pressedKeys.ArrowLeft) {
        selectedWheelchair.xPosition -= 15; // Moves left
    } else if (pressedKeys.ArrowRight) {
        selectedWheelchair.xPosition += 15; // Moves right
    }
    
    // Apply the horizontal position to the 'left' CSS style
    selectedWheelchair.domElement.style.left = selectedWheelchair.xPosition + 'px';
}
