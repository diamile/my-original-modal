const modalBtn=document.getElementById('modalBtn');
const modal=document.getElementById('showModal');

function openModal(){
    modal.style.display="block";
}

function closeModal(){
    modal.style.display="none";
}

const close=document.querySelector('.closeBtn');


modalBtn.addEventListener('click',openModal);

close.addEventListener('click',closeModal);