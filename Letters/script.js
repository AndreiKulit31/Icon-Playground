// CHANGE THIS: Match the ID "counter" from your HTML
const iconElement = document.getElementById('letters'); 

const pressedKeys = { 
    'a': false, 'b': false, 'c': false, 'd': false,
    'e': false, 'f': false, 'g': false, 'h': false,
    'i': false, 'j': false, 'k': false, 'l': false,
    'm': false, 'n': false, 'o': false, 'p': false,
    'q': false, 'r': false, 's': false, 't': false,
    'u': false, 'v': false, 'w': false, 'x': false,
    'y': false, 'z': false, 
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
  a: 'font_download', b: 'format_bold', c: 'copyright', d: '3d_2', e: 'e_mobiledata',
  f: 'language_french', g: 'g_mobiledata_badge', h: 'h_plus_mobiledata', i: 'info', j: 'javascript',
  k: '1k', l: 'currency_lira', m: 'metro', n: 'polymer', o: 'radio_button_unchecked',
  p: 'local_parking', q: 'search', r: 'game_button_r', s: 'strikethrough_s', t: 'title',
  u: 'format_underlined', v: 'check', w: 'wb_auto', x: 'cancel', y: 'y_circle', z: 'snooze'
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
