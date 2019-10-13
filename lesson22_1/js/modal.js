$(document).ready(function(){
    let button = $('#button'),
        modal = $('#modal'),
        close = $('#close');

    button.on('click', function() {
        modal.addClass('modal_active');
    });

    close.on('click', function() {
        modal.removeClass('modal_active');
    })
});