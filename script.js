function showTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const targetPane = document.getElementById(tabId);
    if (targetPane) {
        targetPane.classList.add('active');
    }

    if (tabId === 'games' || tabId === 'project-aero') {
        const gamesBtn = document.getElementById('btn-games');
        if (gamesBtn) gamesBtn.classList.add('active');
    } else if (tabId === 'news') {
        const newsBtn = document.getElementById('btn-news');
        if (newsBtn) newsBtn.classList.add('active');
    }
}

function showProject(projectId) {
    showTab(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const screenshots = [
    "https://img.itch.zone/aW1hZ2UvNDQ4MjgzOC8yNjcyNjcyMS5wbmc=/347x500/YHvvxu.png",
    "https://img.itch.zone/aW1hZ2UvNDQ4MjgzOC8yNjgwNjQ5NS5wbmc=/347x500/ltjrdi.png",
    "https://img.itch.zone/aW1hZ2UvNDQ4MjgzOC8yNjgwNjcyMS5wbmc=/347x500/TjCQbQ.png"
];

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = screenshots[index];
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Archive Initialized.");
});
