// Matches the ID "counter" from your HTML
const iconElement = document.getElementById('letters'); 

const pressedKeys = Object.fromEntries(
  "abcdefghijklmnopqrstuvwxyz ".split("").map(char => [char, false])
);

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
