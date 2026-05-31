const recycleElements = document.querySelectorAll('.cycle');
let selectedRecycle = null; 
const pressedKeys = { ArrowUp: false, ArrowDown: false };

recycleElements.forEach((element) => {
    // Left Click Toggle
    element.addEventListener('pointerdown', function(event) {
        if (event.button !== 0) return; 

        if (selectedRecycle === element) {
            element.classList.remove('selected');
            element.style.animationPlayState = 'paused'; 
            selectedRecycle = null;
            return;
        }

        if (selectedRecycle) {
            selectedRecycle.classList.remove('selected');
            selectedRecycle.style.animationPlayState = 'paused'; 
        }

        selectedRecycle = element;
        element.classList.add('selected');
        element.style.animationPlayState = 'running'; 
    });

    // Right Click Erase
    element.addEventListener('contextmenu', function(event) {
        event.preventDefault(); 
        if (selectedRecycle === element) selectedRecycle = null;
        element.remove(); 
    });
});

window.addEventListener('keydown', function(event) {
    if (event.key in pressedKeys) pressedKeys[event.key] = true;
});

window.addEventListener('keyup', function(event) {
    if (event.key in pressedKeys) pressedKeys[event.key] = false;
});

function updateRecyclePositions() {
    if (!selectedRecycle) return; 

    let currentTop = parseFloat(selectedRecycle.style.top) || (window.innerHeight / 2 - 100);

    if (pressedKeys.ArrowUp)   currentTop -= 15;
    if (pressedKeys.ArrowDown) currentTop += 15;
    
    selectedRecycle.style.top = `${currentTop}px`;
}

function loop() {
    updateRecyclePositions();
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
