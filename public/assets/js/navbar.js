const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const innerOptions = document.querySelector('.inner-options');
const innerOptionsList = document.querySelectorAll('.inner-options li');
const optionsList = document.querySelectorAll('.tab a');


hamburger.addEventListener('click',() =>
{
    hamburger.classList.toggle('active-ham');
    innerOptions.classList.toggle('outside');

    innerOptionsList.forEach((link, index) =>{
        if(link.style.animation)
            link.style.animation= '';
        else    
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/4 + 0.45}s`;
    });
});


optionsList.forEach((option) =>
{
    option.addEventListener('click', () =>
    {
        // section active page
        const activePage = document.querySelector('.is-active-page');

        // tab active 
        const activeTab = document.querySelectorAll('.is-active-tab');

        // removing the active class
        activePage.classList.remove('is-active-page');
        activeTab.forEach(tab => {
            tab.classList.remove('is-active-tab');
        });

        //finding the data-tab value of option clicked
        const tabNumber = option.dataset.tab;

        // adding classes to appropriate tabs
        const nextTab = document.querySelectorAll(`[data-tab="${tabNumber}"]`);
        nextTab.forEach(tab => {
            tab.parentNode.classList.add('is-active-tab');
        });

        // adding classes to appropriate page
        const nextPage=document.querySelector(`[data-page="${tabNumber}"]`);
        nextPage.classList.add('is-active-page');
    });
});

window.addEventListener('scroll', function ()
{
    let windowPosition =  window.scrollY > 10;
    navbar.classList.toggle('change-bg', windowPosition);
});












// // ANUJ
// const hamburger = document.querySelector('.hamburger');
// const dropdown = document.querySelector('.options');
// const options = document.querySelectorAll('.options li');


// window.onload=()=>{
//     const tab_switchers=document.querySelectorAll('[data-switcher');
//     for(let i=0;i<tab_switchers.length;i++)
//     {
//         const tab_switcher=tab_switchers[i];
//         const page_id=tab_switcher.dataset.tab;

//         tab_switcher.addEventListener('click',()=>{
//             document.querySelector('.tab.is-active').classList.remove('is-active');
//             tab_switcher.parentNode.classList.add('is-active');

//             SwitchPage(page_id);
//             hamburger.classList.remove('active-ham');
//             dropdown.classList.remove('outside');
//             options.forEach((link, index) =>{
//                 if(link.style.animation)
//                     link.style.animation= '';
//                 else    
//                     link.style.animation = `navLinkFade 0.5s ease forwards ${index/4 + 0.45}s`;
//             });
//         })
//     }
// }

// function SwitchPage(page_id){
//     const current_page=document.querySelector('.page.is-active');
//     current_page.classList.remove('is-active');

//     const next_page=document.querySelector(`.page[data-page="${page_id}"]`);
//     next_page.classList.add('is-active');
// }


// // Navbar Animation

// hamburger.addEventListener('click',() =>
// {
//     hamburger.classList.toggle('active-ham');
//     dropdown.classList.toggle('outside');

//     options.forEach((link, index) =>{
//         if(link.style.animation)
//             link.style.animation= '';
//         else    
//             link.style.animation = `navLinkFade 0.5s ease forwards ${index/4 + 0.45}s`;
//     });
// });
// const links = querySelectorAll('.tab');
// links.forEach(link => {
//     link.addEventListener('click', () => {
 
//     })
// })
// window.addEventListener('mouseup',function(event){
//     if(event.target!=dropdown&&event.target!=hamburger)
//     {
//         hamburger.classList.remove('active-ham');
//         dropdown.classList.remove('outside');
//     }
// })
// ANUJ
