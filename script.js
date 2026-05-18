// Grab elements from the DOM
const notes = document.querySelectorAll('.note');
const modal = document.getElementById('info-modal');
const closeBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// Add click listeners to all sticky notes
notes.forEach(note => {
    note.addEventListener('click', () => {
        // Get data from the clicked note
        const title = note.getAttribute('data-title');
        const info = note.getAttribute('data-info');
        
        // Populate modal with that specific note's info
        modalTitle.textContent = title;
        modalBody.textContent = info;
        
        // Show modal
        modal.classList.add('active');
    });
});

// Close modal when clicking the 'X'
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal when clicking on the dark background outside the white box
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
