document.addEventListener('DOMContentLoaded', function(){
    let tabToggleItem = document.querySelectorAll('.tabs-triggers__item');
    let tabToggleContent = document.querySelectorAll('.tabs-content__item');

    tabToggleItem.forEach((item)=>{
        item.addEventListener('click', function(e){
            e.preventDefault();
            tabToggleItem.forEach(
                (child) => child.classList.remove('active')
            );
            tabToggleContent.forEach(
                (child) => child.classList.remove('active')
            );
    
            item.classList.add('active');
            document
                .getElementById(e.target.
                    getAttribute('href').
                    replace('#',''))
            .classList.add('active');
        });
    });
    tabToggleItem[0].classList.add('active');
    tabToggleContent[0].classList.add('active');
});