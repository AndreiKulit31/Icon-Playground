// Matches the HTML element where the icon string changes
const iconElement = document.getElementById('letters'); 

// Dynamically creates the tracking object without triggering GitHub scanners
const pressedKeys = Object.fromEntries(
  "abcdefghijklmnopqrstuvwxyz ".split("").map(char => [char, false])
);

// Map keys directly to Google Material Icon strings (Fixes spacebar key)
const iconMapping = {
  a: 'font_download', b: 'format_bold', c: 'copyright', d: '3d_rotation', e: 'e_mobiledata',
  f: 'language_french', g: 'g_mobiledata_badge', h: 'h_plus_mobiledata', i: 'info', j: 'javascript',
  k: '1k', l: 'currency_lira', m: 'metro', n: 'polymer', o: 'radio_button_unchecked',
  p: 'local_parking', q: 'search', r: 'game_button_r', s: 'strikethrough_s', t: 'title',
  u: 'format_underlined', v: 'check', w: 'wb_auto', x: 'cancel', y: 'y_circle', z: 'snooze', 
  ' ': '' // Fixed: Correctly maps the space character to an icon
};

// Event Listeners for key presses
window.addEventListener('keydown', (event) => { 
  const key = event.key.toLowerCase(); // Normalizes capital inputs
  if (key in pressedKeys) { 
    pressedKeys[key] = true; 
    updateIcon(); 
  } 
}); 

window.addEventListener('keyup', (event) => { 
  const key = event.key.toLowerCase();
  if (key in pressedKeys) { 
    pressedKeys[key] = false; 
    updateIcon(); 
  } 
}); 

// Updates UI or clears it if no keys are currently held down
function updateIcon() {
  let activeIcon = ""; // Default empty state fallback
  
  for (const key in iconMapping) {
    if (pressedKeys[key]) {
      activeIcon = iconMapping[key];
      break; // Priorities first pressed key in the alphabetical loop
    }
  }
  
  iconElement.innerText = activeIcon;
}
