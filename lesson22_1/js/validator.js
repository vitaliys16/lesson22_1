/*Валидация формы*/
$(document).ready(function(){
    $('#brif-form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
        },
            email:{
                required: true,
                email: true
            },
            phone: {
                required: true,
            },
        },
        messages: {
            username: {
                required: "Укажите имя",
                minlength: jQuery.validator.format("Осталось символов: {0}"),
                maxlength: jQuery.validator.format("Максимальная длинна имени 15 символов")
            },
            email: {
                email: "Введите корректный email",
                required: "Укажите email"
            }, 
            phone: {
                required: "Укажите номер телефона"
            },  
        },
    });
    /*Маска для телефона*/
    $('.phone').mask ('8 (999) 999-99-99');

    $('#offer-form').validate({
        errorElement: "div",
        errorClass: "invalid-offer",
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
        },
            email:{
                required: true,
                email: true
            },
            phone: {
                required: true,
            },
        },
        messages: {
            username: {
                required: "Укажите имя",
                minlength: jQuery.validator.format("Осталось символов: {0}"),
                maxlength: jQuery.validator.format("Максимальная длинна имени 15 символов")
            },
            email: {
                email: "Введите корректный email",
                required: "Укажите email"
            }, 
            phone: {
                required: "Укажите номер телефона"
            },  
        },
    });
    $('#modal-form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
        },
            email:{
                required: true,
                email: true
            },
            phone: {
                required: true,
            },
        },
        messages: {
            username: {
                required: "Укажите имя",
                minlength: jQuery.validator.format("Осталось символов: {0}"),
                maxlength: jQuery.validator.format("Максимальная длинна имени 15 символов")
            },
            email: {
                email: "Введите корректный email",
                required: "Укажите email"
            }, 
            phone: {
                required: "Укажите номер телефона"
            },  
        },
    });
})
