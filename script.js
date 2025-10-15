document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Vocabulary Pop-up Flashcards
    const vocabItems = document.querySelectorAll('.vocab-item');
    
    vocabItems.forEach(item => {
        // Show translation on hover (for desktop)
        item.addEventListener('mouseover', () => {
            const translation = item.getAttribute('data-translation');
            item.title = `${item.textContent} (${translation})`; // Use title attribute for tooltip
        });

        // Show translation on click (for mobile/tablet)
        item.addEventListener('click', () => {
            const translation = item.getAttribute('data-translation');
            alert(`${item.textContent} significa: ${translation}`);
        });
    });

    // 2. Flag Hover Animation (CSS handles this, but JS can add a more complex effect)
    const interactiveFlags = document.querySelectorAll('.interactive-flag');

    interactiveFlags.forEach(section => {
        const flagIcon = section.querySelector('.flag-icon');
        const countryName = section.getAttribute('data-country');
        
        section.addEventListener('mouseenter', () => {
            // Optional: A more complex effect, e.g., a temporary text label
            if (flagIcon) {
                 flagIcon.textContent = `${countryName} ${flagIcon.textContent}`;
                 flagIcon.style.fontSize = '1.5em';
            }
        });

        section.addEventListener('mouseleave', () => {
             // Reset the flag icon to just the emoji
             if (flagIcon) {
                // Regex to remove the country name added on mouseenter
                flagIcon.textContent = flagIcon.textContent.replace(countryName + ' ', '');
                flagIcon.style.fontSize = '3em';
            }
        });
    });
    
    // 3. Smooth Scroll for CTA button
    document.querySelector('.cta-button').addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});