window.onload=()=>{
    const tab_switchers=document.querySelectorAll('[data-switcher');
    for(let i=0;i<tab_switchers.length;i++)
    {
        const tab_switcher=tab_switchers[i];
        const page_id=tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click',()=>{
            document.querySelector('.tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        })
    }
}

function SwitchPage(page_id){
    const current_page=document.querySelector('.page.is-active');
    current_page.classList.remove('is-active');

    const next_page=document.querySelector(`.page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}


// Navbar Animation
const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.options');
const options = document.querySelectorAll('.options li');
hamburger.addEventListener('click',() =>
{
    hamburger.classList.toggle('active-ham');
    dropdown.classList.toggle('outside');

    options.forEach((link, index) =>{
        if(link.style.animation)
            link.style.animation= '';
        else    
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/4 + 0.45}s`;
    });
});