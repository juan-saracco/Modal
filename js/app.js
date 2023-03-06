//DOM Acces
const openModal = document.querySelector('.hero-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');


openModal.addEventListener('click', ()=>{
    modalOverlay.classList.add('open-modal')
});

closeBtn.addEventListener('click', ()=>{
    modalOverlay.classList.remove('open-modal')
})