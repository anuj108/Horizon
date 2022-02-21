const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const innerOptions = document.querySelector('.inner-options');
const innerOptionsList = document.querySelectorAll('.inner-options li');
const optionsList = document.querySelectorAll('.tab a[data-switcher]');

hamburger.addEventListener('click',() =>
{
    let visInnerList ;
    if(screen.width > 620)
    {
        visInnerList = innerOptions.querySelectorAll('li:not(.hidden)');
    }
    else
    {
        visInnerList = innerOptions.querySelectorAll('li');
    }
    const lengthList = visInnerList.length;

    hamburger.classList.toggle('active-ham');
    innerOptions.classList.toggle('outside');
    visInnerList.forEach((link, index) =>{
        if(hamburger.classList!='hamburger active-ham')
            link.style.animation= '';
        else    
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/(lengthList) + 0.6}s`;
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


        // Game Night Navbar Audio
        const header = document.querySelector('.valorant-heading');
        const button = document.querySelector('.btn-3');
        const audio = document.querySelector('.valo-audio');
        if(tabNumber == 7)
        {
            header.classList.add('appears');
            button.classList.add('visible');
            audio.currentTime = 0;
            audio.play();
            audio.volume = 0.3;
        }
        else
        {
            audio.pause();
            audio.currentTime = 0;
        }

        //Rules and Regulation
        if(tabNumber == 5)
        {
            const upDownIndicator = document.querySelector('.rotate-indicator');
            if(upDownIndicator != null)
                upDownIndicator.classList.remove('rotate-indicator');
             removeVisPoint();
        }

    });
});

// close sidebar when op-credits is clicked.
const credits = document.querySelector('.op-credits');
credits.addEventListener('click', () =>
{
    console.log('drive');
    hamburger.classList.remove('active-ham');
    innerOptions.classList.remove('outside');
}); 


//Function to remove open points 
function removeVisPoint()
{
    

   // at a time only one should be visble
   const visiblePoint = document.querySelector('.visible-yes');

   //Removing class from visible point if any
   if(visiblePoint != null)
        visiblePoint.classList.remove('visible-yes');
}

//Navbar darken on scroll
window.addEventListener('scroll', function ()
{
    let windowPosition =  window.scrollY > 100;
    this.document.querySelector('.outer-nav').classList.toggle('change-bg', windowPosition);
});

// Rules and Regulation
//Selecting headings
const heading = document.querySelectorAll('.rule-info .inner');
heading.forEach(header =>
{
    header.addEventListener('click', () =>
    { 
        // For updown indicator animation
        // remove all visble indicator
        const visIndicator = document.querySelector('.rotate-indicator');
        if(visIndicator != null)
        {
            const visPrevSibling = visIndicator.parentNode.querySelector('.name');
            visIndicator.classList.remove('rotate-indicator');
            visPrevSibling.classList.remove('red-name');
        }
        
        // adding class if current point click was not the previous point
        const upDownIndicator = header.querySelector('.indicator');
        if(visIndicator != upDownIndicator)
        {
            const prevSibling = upDownIndicator.parentNode.querySelector('.name');
            upDownIndicator.classList.toggle('rotate-indicator');
            prevSibling.classList.toggle('red-name');
        }
        
        // actual animation when clicked 

        // at a time only one should be visble
        const visiblePoint = document.querySelector('.visible-yes');

        //header has neading but we want the next div so using parentNode
        const subPointsDiv = header.parentNode.querySelector('.sub-points');

        //removes open points if present
        removeVisPoint();
        
        //adding class if visible point is not equal to clicked point  
        if(visiblePoint != subPointsDiv)
            subPointsDiv.classList.add('visible-yes');

        //getting all the lis of sub-points Node and its length
        const subPoints = subPointsDiv.querySelectorAll('li');
        const numSubPoints = subPoints.length;    

        //load animation for each point like in Navbar
        subPoints.forEach((link, index) =>{
            if(subPointsDiv.classList != 'sub-points visible-yes')
                link.style.animation= '';
            else    
                link.style.animation = `subOptionsFade 0.5s ease forwards ${index/numSubPoints +0.1 }s`;
        });
    });
});

const image = document.querySelector('.preloader img');

image.addEventListener('click', ()=>{
    const expand = document.querySelector('.preloader .expand');
    expand.style.transform = 'scale(0)';
});

// add setTimeout
//add display none after page load to sections
function preload(){
    const preloader = document.querySelector('.preloader');
    const image = document.querySelector('.preloader img');
    const expand = document.querySelector('.preloader .expand');
    
    setTimeout(()=>{
        expand.style.transform = 'scale(0)';
        image.style.opacity = '0';
        expand.addEventListener('transitionend', ()=>{
        preloader.style.display = 'none';
    });
    }, 500);
}   