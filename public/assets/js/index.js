const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const innerOptions = document.querySelector('.inner-options');
const innerOptionsList = document.querySelectorAll('.inner-options li');
const optionsList = document.querySelectorAll('.tab a');

const header = document.querySelector('.valorant-heading');
const button = document.querySelector('.btn-3');
const audio = document.querySelector('.valo-audio');

hamburger.addEventListener('click',() =>
{

    hamburger.classList.toggle('active-ham');
    innerOptions.classList.toggle('outside');
    innerOptionsList.forEach((link, index) =>{
        if(hamburger.classList!='hamburger active-ham')
            link.style.animation= '';
        else    
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/4 }s`;
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
        hamburger.classList.remove('active-ham');
        innerOptions.classList.remove('outside');
        innerOptionsList.forEach((link, index) =>{

            if(link.style.animation)
                link.style.animation= '';
            else    
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/4 + 0.45}s`;
        });
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


        // Game Night Navbar
        if(tabNumber == 6)
        {
            header.classList.add('appears');
            button.classList.add('visible');
            audio.currentTime = 0;
            audio.play();
            audio.volume = 0.2;
        }
        else
        {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});

window.addEventListener('scroll', function ()
{
    let windowPosition =  window.scrollY > 10;
    navbar.classList.toggle('change-bg', windowPosition);
});

// Rules and Regulation
const heading = document.querySelectorAll('.rule-info p');
// const subHeader = document.querySelectorAll('.sub-points');
// const subPoints = document.querySelectorAll('.sub-points li'); 

heading.forEach(header =>
{
    header.addEventListener('click', () =>
    {
        const subPointsDiv = header.parentNode.querySelector('.sub-points');
        const subPoints = subPointsDiv.querySelectorAll('li');
        const numSubPoints = subPoints.length;

        subPointsDiv.classList.toggle('sub-points-visible');

        subPoints.forEach((link, index) =>{
            if(subPointsDiv.classList != 'sub-points sub-points-visible')
                link.style.animation= '';
            else    
                link.style.animation = `subOptionsFade 0.5s ease forwards ${index/numSubPoints +0.1 }s`;
        });
    });
});