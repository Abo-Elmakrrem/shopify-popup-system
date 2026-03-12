
/* Custom Card Section JS (Meraki) */
/* Uses ES6 features: const/let, template literals, dataset, optional chaining */

document.addEventListener('DOMContentLoaded', () => {
  // Find all custom card sections
  const sections = document.querySelectorAll('.custom-card-section');

  sections.forEach((section) => {
    const button = section.querySelector('.custom-card__button');
    const badge  = section.querySelector('.custom-card__badge');

    // Example: add ripple effect to button
    if (button) {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripple.style.left = `${x}px`;
        ripple.style.top  = `${y}px`;
        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 450);
      });
    }

    // Example: auto-hide empty badge (defensive)
    if (badge && !badge.textContent.trim()) {
      badge.style.display = 'none';
    }
  });
});

// Optional small CSS for ripple (injected via JS for demo)
const style = document.createElement('style');
style.textContent = `
  .custom-card__button { position: relative; overflow: hidden; }
  .custom-card__button .ripple {
    position: absolute; width: 12px; height: 12px; border-radius: 50%;
    background: rgba(255,255,255,0.5); transform: translate(-50%, -50%) scale(0);
    animation: ripple .45s ease-out forwards;
    pointer-events: none;
  }
  @keyframes ripple { to { transform: translate(-50%, -50%) scale(12); opacity: 0; } }
`;
document.head.appendChild(style);
