// main.js - Menu Rendering & Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Helper function to create menu card DOM elements
    function createMenuItemCard(item) {
        const card = document.createElement('div');
        card.className = 'menu-card';
        
        // Image area with emoji/icon
        const imgDiv = document.createElement('div');
        imgDiv.className = 'card-img';
        imgDiv.innerHTML = `<span style="font-size: 3.5rem;">${item.icon || '🍽️'}</span>`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-content';
        
        const headerDiv = document.createElement('div');
        headerDiv.className = 'dish-header';
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'dish-name';
        nameSpan.textContent = item.name;
        
        const priceSpan = document.createElement('span');
        priceSpan.className = 'dish-price';
        priceSpan.textContent = item.price;
        
        headerDiv.appendChild(nameSpan);
        headerDiv.appendChild(priceSpan);
        
        const descPara = document.createElement('p');
        descPara.className = 'dish-desc';
        descPara.textContent = item.desc;
        
        const tagSpan = document.createElement('span');
        tagSpan.className = 'dish-tag';
        tagSpan.innerHTML = `<i class="fas fa-tag"></i> ${item.tag}`;
        
        contentDiv.appendChild(headerDiv);
        contentDiv.appendChild(descPara);
        contentDiv.appendChild(tagSpan);
        
        card.appendChild(imgDiv);
        card.appendChild(contentDiv);
        
        return card;
    }
    
    // Render each section if the grid container exists on page
    const appetizersGrid = document.getElementById('appetizers-grid');
    if (appetizersGrid && menuItems.appetizers) {
        menuItems.appetizers.forEach(item => {
            appetizersGrid.appendChild(createMenuItemCard(item));
        });
    }
    
    const mainsGrid = document.getElementById('mains-grid');
    if (mainsGrid && menuItems.mains) {
        menuItems.mains.forEach(item => {
            mainsGrid.appendChild(createMenuItemCard(item));
        });
    }
    
    const dessertsGrid = document.getElementById('desserts-grid');
    if (dessertsGrid && menuItems.desserts) {
        menuItems.desserts.forEach(item => {
            dessertsGrid.appendChild(createMenuItemCard(item));
        });
    }
    
    const beveragesGrid = document.getElementById('beverages-grid');
    if (beveragesGrid && menuItems.beverages) {
        menuItems.beverages.forEach(item => {
            beveragesGrid.appendChild(createMenuItemCard(item));
        });
    }
    
    // Smooth scroll for any anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId !== '#') {
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    e.preventDefault();
                    targetElem.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
