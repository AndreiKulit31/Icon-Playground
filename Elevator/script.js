const elevatorElements = document.querySelectorAll('.elevator');
let selectedElevator = null; 
const elevators = [];

elevatorElements.forEach((element) => {
    const elevatorObject = {
        domElement: element,
        yPosition: window.innerHeight / 2 - 75 // Dynamic starting position center
    };
    
    elevators.push(elevatorObject);

    // Left Click: Select the elevator
    element.addEventListener('click', function() {
        elevators.forEach(el => el.domElement.classList.remove('selected'));
        selectedElevator = elevatorObject;
        element.classList.add('selected');
    });

    // --- RIGHT CLICK: MAKE DISAPPEAR ---
    element.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Stops the annoying browser right-click menu
        
        // If the disappearing elevator was selected, clear the selection
        if (selectedElevator === elevatorObject) {
            selectedElevator = null;
        }
        
        // Make it disappear instantly
        element.style.display = 'none';
    });
});

const pressedKeys = { ArrowUp: false, ArrowDown: false };

window.addEventListener('keydown', function(event) {
    if (event.key in pressedKeys) {
        pressedKeys[event.key] = true;
        updateElevators(); 
    }
});

window.addEventListener('keyup', function(event) {
    if (event.key in pressedKeys) { pressedKeys[event.key] = false; }
});

function updateElevators() {
    if (!selectedElevator) return; 

    if (pressedKeys.ArrowUp) {
        selectedElevator.yPosition -= 15; // Increased speed for snappier movement
    } else if (pressedKeys.ArrowDown) {
        selectedElevator.yPosition += 15; 
    }
    
    selectedElevator.domElement.style.top = selectedElevator.yPosition + 'px';
}
