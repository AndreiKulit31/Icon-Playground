// CHANGE THIS: Match the ID "counter" from your HTML
const iconElement = document.getElementById('face'); 

const pressedKeys = { 
    ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false,
    '1': false, '2': false, '3': false, '4': false, 
    '5': false
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

const iconMapping = {
    1:'sentiment_extremely_dissatisfied', 2:'sentiment_dissatisfied', 3:'sentiment_neutral',
    4:'sentiment_satisfied', 5:'sentiment_very_satisfied'
};


function updateIcon() {
  // Loop through a-z to find the first key that is pressed
  for (const key in iconMapping) {
    if (pressedKeys[key]) {
      iconElement.innerText = iconMapping[key];
      break; // Stop checking once we find a pressed key
    }
  }
}
