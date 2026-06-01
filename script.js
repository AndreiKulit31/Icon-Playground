const menuGenerationMap = {
  'wheelchair': [
    { href: 'Elevator/index.html', label: 'Elevator', icon: 'elevator' }
  ]
};

document.addEventListener('contextmenu', (event) => {
  const currentLink = event.target.closest('a');
  if (!currentLink) return;
  
  // If clicking an elevator link we already generated, let it work normally!
  if (currentLink.classList.contains('generated-link')) return;
  
  // Stop the browser's default right-click menu
  event.preventDefault();
  
  const parent = currentLink.parentNode;
  const iconSpan = currentLink.querySelector('.material-symbols-outlined');
  if (!iconSpan) return;

  // Find the unique icon class (like 'wheelchair')
  const clickedClass = Array.from(iconSpan.classList).find(cls => cls !== 'material-symbols-outlined');
  const itemsToCreate = menuGenerationMap[clickedClass];

  if (itemsToCreate) {
    // 1. Grab exactly what we need from the clicked item
    const savedHref = currentLink.href;
    const savedLabel = currentLink.getAttribute('aria-label');
    const savedIconName = iconSpan.textContent;
    const savedClassName = clickedClass;

    // 2. Completely wipe out the entire grid container safely
    parent.innerHTML = '';

    // 3. Re-create the original icon as a fresh, clean element (with NO weird layout baggage)
    const baseLink = document.createElement('a');
    baseLink.href = savedHref;
    baseLink.setAttribute('aria-label', savedLabel);
    // Block standard left-click navigation on this specific base link
    baseLink.addEventListener('click', (e) => e.preventDefault());

    const baseIcon = document.createElement('span');
    baseIcon.className = `material-symbols-outlined ${savedClassName}`;
    baseIcon.style.opacity = '0.3';
    baseIcon.textContent = savedIconName;

    baseLink.append(baseIcon);
    parent.append(baseLink);

    // 4. Create and append the new generator items right next to it in the grid
    itemsToCreate.forEach(itemData => {
      const newLink = document.createElement('a');
      console.log(itemData.href);
      newLink.href = itemData.href;
      newLink.setAttribute('aria-label', itemData.label);
      newLink.target = '_blank';
      newLink.classList.add('generated-link'); // Label it clearly

      const newIcon = document.createElement('span');
      newIcon.className = `material-symbols-outlined ${itemData.icon}`; 
      newIcon.style.opacity = '0.3'; 
      newIcon.textContent = itemData.icon; 

      newLink.append(newIcon);
      parent.append(newLink); // Sits perfectly side-by-side in the grid
    });

        newLink.addEventListener('click', (e) => {
            console.log('clicked');
            console.log(e.target);
            console.log(newLink.href);
        });
  }
});
