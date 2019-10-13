$(document).ready(function(){
    $('.slider').owlCarousel({
        loop:true,
        margin:28,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
        },
    })
});
let owl=$('.owl-carousel');
//$(".next") - находим нашу кнопку
$('.arrows__right').click(function(){
    owl.trigger("next.owl.carousel");
});
$('.arrows__left').click(function(){
    owl.trigger("prev.owl.carousel");})