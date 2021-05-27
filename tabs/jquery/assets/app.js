$(document).ready(function(){
    $('.tabs-triggers__item').click(function(e){
        e.preventDefault();
        $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
        $('.tabs-content__item').removeClass('tabs-content__item--active');

        $(this).addClass('tabs-triggers__item--active');

        $($(this).attr('href')).addClass('tabs-content__item--active')
    });
});