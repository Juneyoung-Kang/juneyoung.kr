window.addEventListener('load', function () {

    let closeModalBtn = this.document.getElementById('close-modal-btn');
    let openModalBtn = this.document.getElementById('open-modal-btn');
    let dropback = this.document.getElementsByClassName('dropback')[0];
    let modal = this.document.getElementsByClassName('modal')[0];

    openModalBtn.addEventListener('click', showModal);

    function showModal() {
        dropback.classList.add('showDropback');
        modal.classList.add('showModal');
    }

    dropback.addEventListener('click', hideModal);
    closeModalBtn.addEventListener('click', hideModal);


    function hideModal() {
        dropback.classList.remove('showDropback');
        modal.classList.remove('showModal');
    }
});