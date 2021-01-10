$(function(){
    $('.dropdown .dropdown-toggle').click(function(){
        $(this).parent().find('ul').toggle(500);
    });
    $('.collapse-toggle').click(function(){
        let target = $(this).attr('data-target');
        $(target).slideToggle(600);
    });
    $('.alert button').click(function(){
        $(this).parent().hide();
    });
});