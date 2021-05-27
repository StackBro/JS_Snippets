$(document).ready(function(){
    let tabToggleItem = $('.tabs-triggers__item');
    let tabToggleContent = $('.tabs-content__item');
    tabToggleItem.click(function(e){
        e.preventDefault();
        tabToggleItem.removeClass('active');
        tabToggleContent.removeClass('active');

        $(this).addClass('active');

        $($(this).attr('href')).addClass('active')
    });
});