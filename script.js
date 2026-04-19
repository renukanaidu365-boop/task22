// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            menuBtn.textContent = '✕';
        } else {
            mobileMenu.classList.add('hidden');
            menuBtn.textContent = '☰';
        }
    });
}

// Chat widget button click handler
const chatBtn = document.getElementById('chatBtn');
if (chatBtn) {
    chatBtn.addEventListener('click', function() {
        alert('💬 AI Assistant: How can I help you today?');
    });
}
