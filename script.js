const projectHolder = document.querySelectorAll('.projectHolder');
const header = document.querySelector('.header');

const directory = document.querySelector('.directory');

const homeNav = document.querySelector('.homeNav');
const projectNav = document.querySelector('.projectNav');
const experienceNav = document.querySelector('.experienceNav');
const educationNav = document.querySelector('.educationNav');
const aboutNav = document.querySelector('.aboutNav');

window.addEventListener('scroll', ()=>{

    if(window.innerWidth >= 500){
        if(window.scrollY<260){
            directory.textContent = 'home';
        } 
        
        if (window.scrollY>260){
            directory.textContent = 'projects';
        }
    
        if(window.scrollY>810){
            directory.textContent = 'experience';
        }
        
        if(window.scrollY>1250){
            directory.textContent = 'education';
        } 
    
        if(window.scrollY>1620){
            directory.textContent = 'about';
        }
    } else {
        if(window.scrollY<233){
            directory.textContent = 'home';
        } 
        
        if (window.scrollY>233){
            directory.textContent = 'projects';
        }
    
        if(window.scrollY>785){
            directory.textContent = 'experience';
        }
        
        if(window.scrollY>1235){
            directory.textContent = 'education';
        } 
    
        if(window.scrollY>1560){
            directory.textContent = 'about';
        }
    }
    
})


//Navigation Buttons
homeNav.addEventListener('click', ()=>{
    if(window.innerWidth >500){
        window.scrollTo(0,0);
    } else {
        window.scrollTo(0,0);
    }
    
   
})
projectNav.addEventListener('click', ()=>{
    if(window.innerWidth >500){
        window.scrollTo(0,300);
    } else {
        window.scrollTo(0,270);
    }
    
})

aboutNav.addEventListener('click', ()=>{
    if(window.innerWidth >500){
        window.scrollTo(0,1640);
    } else {
        window.scrollTo(0,1585);
    }
})

//Nav Bar
window.addEventListener('scroll', ()=>{
    if (window.scrollY>20){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

    projectHolder.forEach(item => {
        item.addEventListener('mouseover', ()=>{
            item.style.paddingLeft = '10px';
        })
    });

    projectHolder.forEach(item => {
        item.addEventListener('mouseout', ()=>{
            item.style.paddingLeft = '0';
        })
    });

// Get all hover targets
const hoverTargets = document.querySelectorAll('.hoverTarget');
const revealDiv = document.getElementById('floatingProjectReveal');
const hoverImage = revealDiv.querySelector('.hover-image');

// Add event listeners to each hover target
hoverTargets.forEach(target => {
  target.addEventListener('mousemove', (e) => {
    // Get the image URL from data attribute
    const imageUrl = target.getAttribute('data-hover-image');
    
    // Update the floating div's image
    hoverImage.src = imageUrl;
    
    // Get current scroll position
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Position the div centered at cursor, accounting for scroll
    const x = e.clientX + scrollX - (revealDiv.offsetWidth / 2);
    const y = e.clientY + scrollY - (revealDiv.offsetHeight / 2) + 20;
    
    revealDiv.style.left = `${x}px`;
    revealDiv.style.top = `${y}px`;
    
    // Show the div
    revealDiv.classList.add('visible');
  });

  target.addEventListener('mouseleave', () => {
    // Hide the div when mouse leaves
    revealDiv.classList.remove('visible');
  });
});