const modal = document.querySelector('.modal-container');
const modalBtnOpener = document.querySelector('#modal-btn');
const modalBtn = document.querySelector('.modal-content button');

modal.className = 'none';

modalBtnOpener.addEventListener('click', () => {
  modal.className = 'modal-container open_Modal';
  modalBtnOpener.className = 'op';
  console.log(9);
});

modalBtn.addEventListener('click', () => {
  modal.className = 'nne';
  modalBtnOpener.className = 'op-one';
});
