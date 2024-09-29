const dialog = document.querySelector('.dialog__test');
const dialogOpener = document.querySelector('.header__button-lk');
const dialogCloser = dialog.querySelector('.dialog__button');
function closeOnBackDropClick({ currentTarget, target }) {
    const dialog = currentTarget
    const isClickedOnBackDrop = target === dialog
    if (isClickedOnBackDrop) {
      close()
    }
  }
  
  function openModalAndLockScroll() {
    dialog.showModal()
    document.body.classList.add('scroll-lock')
  }
  
  function returnScroll() {
    document.body.classList.remove('scroll-lock')
  }
  
  function close() {
    dialog.close()
    returnScroll()
  }
  
  dialog.addEventListener('click', closeOnBackDropClick)
  dialog.addEventListener('cancel', (event) => {
    returnScroll()
  });
  dialogOpener.addEventListener('click', openModalAndLockScroll)
  dialogCloser.addEventListener('click', (event) => {
    event.stopPropagation()
    close()
  })