$(document).ready(function () {

     $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { //если пролистаем на 100px ниже, то появится кнопка
            $('#scroll-up').fadeIn();
        } else {
            $('#scroll-up').fadeOut();
        }
    });
    $('#scroll-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});