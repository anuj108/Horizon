const hamburger = document.querySelector('.hamburger');
const innerOptions = document.querySelector('.inner-options');
const innerOptionsList = document.querySelectorAll('.inner-options li');
const outerOptions = document.querySelector('.outer-options');


window.onload=()=>{
    const tab_switchers=document.querySelectorAll('[data-switcher]');
    tab_switchers.forEach( tab_switcher => {
       

        const curr_page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click',()=>{
            
            document.querySelector('.tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
            hamburger.classList.remove('active-ham');
            dropdown.classList.remove('outside');
            options.forEach((link, index) =>{
                if(link.style.animation)
                    link.style.animation= '';
                else    
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index/4 + 0.45}s`;
    });

}

function SwitchPage(page_id){
    const current_page=document.querySelector('.page.is-active');
    current_page.classList.remove('is-active');

    const next_page=document.querySelector(`.page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}

hamburger.addEventListener('click',() =>
{
    hamburger.classList.toggle('active-ham');
    dropdown.classList.toggle('outside');

    options.forEach((link, index) =>{
        if(link.style.animation)
            link.style.animation= '';
        else    
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/4  }s`;
    });
});
