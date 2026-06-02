// CHANGE THIS: Match the ID "counter" from your HTML
const iconElement = document.getElementById('counter'); 

const pressedKeys = { 
    ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false,
    '0': false, '1': false, '2': false, '3': false, '4': false, 
    '5': false, '6': false, '7': false, '8': false, '9': false,
    'x': false, 'arrow_right': false, 
    '?': false,
    '!': false // Added '!' to track the exclamation mark key
};

window.addEventListener('keydown', function(event) { 
    if (event.key in pressedKeys) { 
        pressedKeys[event.key] = true; 
        updateIcon(); 
    } 
}); 

window.addEventListener('keyup', function(event) { 
    if (event.key in pressedKeys) { 
        pressedKeys[event.key] = false; 
        updateIcon(); 
    } 
}); 

function updateIcon() { 
    // 1. Check if '!' is currently held down
    if (pressedKeys['!']) {
        iconElement.innerText = 'exclamation'; // Displays an exclamation icon
        return;
    }

    // 2. Check if '?' is currently held down
    if (pressedKeys['?']) {
        iconElement.innerText = 'question_mark'; 
        return;
    }

    // 3. Check if 'x' is currently held down
    if (pressedKeys['x']) {
        iconElement.innerText = 'close';
        return; 
    }
    else if (pressedKeys.ArrowRight) {
        iconElement.innerText = 'arrow_forward';
    }

    // 4. Check for number keys
    for (let i = 0; i <= 9; i++) {
        const numString = i.toString();
        if (pressedKeys[numString]) {
            iconElement.innerText = `counter_${numString}`; 
            return; 
        }
    }
}
