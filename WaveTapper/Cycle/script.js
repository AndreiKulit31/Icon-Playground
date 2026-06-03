// ==========================================
// 1. VARIABLES & ELEMENT SELECTION
// ==========================================
const iconElement = document.getElementById('counter'); 
const iconGrid = document.getElementById('iconGrid'); 
const recycleElements = document.querySelectorAll('.cycle');

let selectedRecycle = null; 
let lastIconText = ''; 
let isGridOpen = false; 

const pressedKeys = { 
    ' ': false
};

// ==========================================
// 2. MOUSE / POINTER EVENT LISTENERS
// ==========================================
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
        
        // Force focus back to the window so Spacebar reacts instantly
        window.focus(); 
    });

    // 🔴 FIXED: Right-click NO LONGER deletes elements or breaks focus!
    element.addEventListener('contextmenu', function(event) {
        event.preventDefault(); 
        if (selectedRecycle === element) {
            element.classList.remove('selected');
            element.style.animationPlayState = 'paused';
            selectedRecycle = null;
        }
    });
});

// ==========================================
// 3. KEYBOARD EVENT LISTENERS (SPACEBAR ONLY)
// ==========================================
window.addEventListener('keydown', function(event) { 
    if (event.key === ' ') {
        event.preventDefault(); // Stops page scrolling

        if (event.key === ' ') {
            event.preventDefault();
        
            if (!pressedKeys[' ']) {
            
                if (selectedRecycle) {
                    selectedRecycle.style.display = 'none';
                }
            
                if (iconGrid) {
                    isGridOpen = !isGridOpen;
                
                    if (isGridOpen) {
                        iconGrid.style.display = 'grid';
                        if (iconElement) {
                            lastIconText = iconElement.innerText;
                            iconElement.innerText = '';
                        }
                    } else {
                        iconGrid.style.display = 'none';
                        if (iconElement) {
                            iconElement.innerText = lastIconText || '';
                        }
                    }
                }
            }
        }
    }

    if (event.key in pressedKeys) { 
        pressedKeys[event.key] = true; 
    } 
}); 

window.addEventListener('keyup', function(event) { 
    if (event.key in pressedKeys) { 
        pressedKeys[event.key] = false; 
    } 
}); 

// ==========================================
// 4. ANIMATION LOOP
// ==========================================
function updateRecyclePositions() {
    if (!selectedRecycle) return; 
}

function loop() {
    updateRecyclePositions();
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
