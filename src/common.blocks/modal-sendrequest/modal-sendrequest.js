const modalSendrequest = document.querySelector('#modal-sendrequest');
const openModalSendrequest = document.querySelector('#modal-sendrequest-open');
const closeModalSendrequest = document.querySelector('#modal-sendrequest-close');

openModalSendrequest.addEventListener('click', () => {
  modalSendrequest.showModal();
});

closeModalSendrequest.addEventListener('click', () => {
  modalSendrequest.close();
});
