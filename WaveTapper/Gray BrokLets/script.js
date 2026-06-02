// Matches the ID "counter" from your HTML
const iconElement = document.getElementById('letters'); 

const pressedKeys = { 
    'a': false, 'b': false, 'c': false, 'd': false, 'e': false, 
    'f': false, 'g': false, 'h': false, 'i': false, 'j': false, 
    'k': false, 'l': false, 'm': false, 'n': false, 'o': false, 
    'p': false, 'q': false, 'r': false, 's': false, 't': false, 
    'u': false, 'v': false, 'w': false, 'x': false, 'y': false, 
    'z': false 
};

window.addEventListener('keydown', function(event) {
    // Converts uppercase input to lowercase to match the object keys
    const key = event.key.toLowerCase(); 
    if (key in pressedKeys) {
        pressedKeys[key] = true;
        updateIcon();
    }
});

window.addEventListener('keyup', function(event) {
    const key = event.key.toLowerCase();
    if (key in pressedKeys) {
        pressedKeys[key] = false;
        updateIcon();
    }
});

function updateIcon() {
    let keyPressed = false;

    // Loops through pressedKeys to find the first active key
    for (const key in pressedKeys) {
        if (pressedKeys[key]) {
            iconElement.innerText = key;
            keyPressed = true;
            break; // Stops checking once the first pressed key is found
        }
    }
}
