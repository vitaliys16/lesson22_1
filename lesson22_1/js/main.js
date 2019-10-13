let button = document.querySelector('#button'), //позволяет найти элемент
  modal = document.querySelector('#modal'),
  close = document.querySelector('#close');
button.addEventListener('click', function(){
  modal.classList.add('modal_active');
  setTimeout(function(){
    modal.classList.remove ('modal_active')}, 5000);
});
//addEventListener - Отслеживание событий

close.addEventListener('click', function(){
    modal.classList.remove ('modal_active');
});
/*function autoClose() {
    if (modal.classList.add('modal_active'))
    {
    modal.classList.remove ('modal_active');}
  }
  setTimeout(autoClose, 1000);*/
