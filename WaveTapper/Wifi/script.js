// Matches the ID "wifi" from your HTML
const iconElement = document.getElementById('wifi'); 

// Track keys 1, 2, and 3
const pressedKeys = { 
    '1': false, '2': false, '3': false
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
  // Loop through physical keys 1 to 3
  for (let i = 1; i <= 3; i++) {
    const numString = i.toString(); 
    
    if (pressedKeys[numString]) {
      // Maps Key 1 -> wifi_1_bar, Key 2 -> wifi_2_bar, Key 3 -> wifi
      iconElement.innerText = (i === 3) ? 'wifi' : `wifi_${i}_bar`; 
      
      console.log(`Key: ${i}, Icon text set to: ${iconElement.innerText}`);
      return; 
    }
  }
}
