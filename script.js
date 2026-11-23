// Show a section and update the active navigation button.
function showTab(tabId) {
    const targetPane = document.getElementById(tabId);
    if (!targetPane || !targetPane.classList.contains('tab-pane')) return;

    document.querySelectorAll('.tab-pane').forEach(pane => {
        const isActive = pane === targetPane;
        pane.classList.toggle('active', isActive);
        pane.hidden = !isActive;
    });

    const activeNav = tabId === 'news' ? 'btn-news' : 'btn-games';
    document.querySelectorAll('.nav-btn').forEach(button => {
        const isActive = button.id === activeNav;
        button.classList.toggle('active', isActive);
        if (isActive) button.setAttribute('aria-current', 'page');
        else button.removeAttribute('aria-current');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showProject(projectId) {
    showTab(projectId);
}

let lightboxReturnFocus = null;

function openLightbox(index) {
    const galleryImages = document.querySelectorAll('#project-aero .gallery-grid img');
    const screenshot = galleryImages[index];
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    if (!screenshot || !lightbox || !lightboxImg) return;

    lightboxReturnFocus = document.activeElement;
    lightboxImg.src = screenshot.currentSrc || screenshot.src;
    lightboxImg.alt = screenshot.alt;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.close-btn')?.focus();
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (!lightbox || lightbox.getAttribute('aria-hidden') === 'true') return;

    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lightboxImg) lightboxImg.removeAttribute('src');
    if (lightboxReturnFocus?.isConnected) lightboxReturnFocus.focus();
    lightboxReturnFocus = null;
}

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');

    // Clicking outside the displayed image closes the viewer.
    lightbox?.addEventListener('click', event => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeLightbox();

        // Keep keyboard focus inside the screenshot viewer while it is open.
        if (event.key === 'Tab' && lightbox?.getAttribute('aria-hidden') === 'false') {
            event.preventDefault();
            lightbox.querySelector('.close-btn')?.focus();
        }
    });
});
