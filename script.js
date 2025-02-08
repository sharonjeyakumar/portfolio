const projectHolder = document.querySelectorAll('.projectHolder');
const header = document.querySelector('.header');

const directory = document.querySelector('.directory');

const homeNav = document.querySelector('.homeNav');
const projectNav = document.querySelector('.projectNav');
const experienceNav = document.querySelector('.experienceNav');
const educationNav = document.querySelector('.educationNav');
const aboutNav = document.querySelector('.aboutNav');











window.addEventListener('scroll', ()=>{
    console.log(scrollY);
    if(window.scrollY<260){
        directory.textContent = 'home';
    } 
    
    if (window.scrollY>260){
        directory.textContent = 'projects';
    }

    if(window.scrollY>788){
        directory.textContent = 'experience';
    }
    
    if(window.scrollY>1095){
        directory.textContent = 'education';
    } 

    if(window.scrollY>1478){
        directory.textContent = 'about';
    }
})


//Navigation Buttons
homeNav.addEventListener('click', ()=>{
    window.scrollTo(0,0);
   
})
projectNav.addEventListener('click', ()=>{
    window.scrollTo(0,300);
    
})
// experienceNav.addEventListener('click', ()=>{
//     window.scrollTo(0,820)
// })
// educationNav.addEventListener('click', ()=>{
//     window.scrollTo(0,820)
// })
aboutNav.addEventListener('click', ()=>{
    window.scrollTo(0,1500)
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
