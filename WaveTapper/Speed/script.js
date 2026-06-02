// CHANGE THIS: Match the ID "counter" from your HTML
const iconElement = document.getElementById('speed'); 

const pressedKeys = { 
    '1': false, '2': false, '3': false, '4': false
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
  // 4. Check for number keys (1 to 4)
  for (let i = 1; i <= 4; i++) {
    const numString = i.toString(); 
    
    if (pressedKeys[numString]) {
      // If 4 is pressed, use empty string, otherwise use _2, _3, _4
      const suffix = (i === 4) ? '' : `_${i + 1}`;
      iconElement.innerText = `speed${suffix}`; 
      console.log(i)
      return; 
    }
  }
}
