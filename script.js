const projectHolder = document.querySelectorAll('.projectHolder');
const header = document.querySelector('.header');

const directory = document.querySelector('.directory');

const homeNav = document.querySelector('.homeNav');
const projectNav = document.querySelector('.projectNav');
const experienceNav = document.querySelector('.experienceNav');
const educationNav = document.querySelector('.educationNav');
const aboutNav = document.querySelector('.aboutNav');

// Preload all hover images on page load
window.addEventListener('load', () => {
  const hoverTargets = document.querySelectorAll('.hoverTarget');
  const imageUrls = new Set();

  // Collect unique image URLs
  hoverTargets.forEach(target => {
    const url = target.getAttribute('data-hover-image');
    if (url) {
      imageUrls.add(url);
    }
  });

  // Preload each image
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
});


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


const hoverTargets = document.querySelectorAll('.hoverTarget');
const revealDiv = document.getElementById('floatingProjectReveal');
const hoverImage = revealDiv.querySelector('.hover-image');

hoverTargets.forEach(target => {
  target.addEventListener('mousemove', (e) => {
    const imageUrl = target.getAttribute('data-hover-image');
    
    hoverImage.src = imageUrl;
    
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    
    const x = e.clientX + scrollX - (revealDiv.offsetWidth / 2);
    const y = e.clientY + scrollY - (revealDiv.offsetHeight / 2) + 20;
    
    revealDiv.style.left = `${x}px`;
    revealDiv.style.top = `${y}px`;
    
    
    revealDiv.classList.add('visible');
  });

  target.addEventListener('mouseleave', () => {
    revealDiv.classList.remove('visible');
  });
});

