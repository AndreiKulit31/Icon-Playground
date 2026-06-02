const spinnerElements = document.querySelectorAll('.spinner');
let selectedSpinner = null; 
const pressedKeys = { ArrowUp: false, ArrowDown: false };

spinnerElements.forEach((element) => {
    element.addEventListener('pointerdown', function(event) {
        if (event.button !== 0) return; // Only trigger on Left Click
    
        // If we click the ALREADY selected spinner, turn it off and deselect it
        if (selectedSpinner === element) {
            element.classList.remove('selected');
            element.style.animationPlayState = 'paused';
            selectedSpinner = null;
            return; // Stop running the rest of the function
        }
    
        // Clear any previous selection first
        if (selectedSpinner) {
            selectedSpinner.classList.remove('selected');
            selectedSpinner.style.animationPlayState = 'paused';
        }
    
        // Select and start the new spinner
        selectedSpinner = element;
        element.classList.add('selected');
        element.style.animationPlayState = 'running';
    });

});

// 3. Clean Input Handling
window.addEventListener('keydown', function(event) {
    if (event.key in pressedKeys) pressedKeys[event.key] = true;
});

window.addEventListener('keyup', function(event) {
    if (event.key in pressedKeys) pressedKeys[event.key] = false;
});

// 4. Optimized Position Updates
function updateSpinners() {
    // Optional chaining (?.) stops execution safely if selectedSpinner is null
    if (!selectedSpinner) return; 

    // Read current position safely, falling back to a centered calculation if empty
    let currentTop = parseFloat(selectedSpinner.style.top) || (window.innerHeight / 2 - 75);

    if (pressedKeys.ArrowUp)    currentTop -= 15;
    if (pressedKeys.ArrowDown)  currentTop += 15;
    
    selectedSpinner.style.top = `${currentTop}px`;
}

// 5. High-Performance Animation Loop
function loop() {
    updateSpinners();
    requestAnimationFrame(loop); // Smoother execution than setInterval
}
requestAnimationFrame(loop);
