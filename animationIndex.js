// Hero Text Selection 
let heroText = document.querySelector('.my-col-1');
console.log(heroText);


//Animation on Load
$(document).ready(function(){
    // Hero Text animation 
    heroText.classList.add('animate__animated', 'animate__bounceInLeft');
    heroText.style.setProperty('animation-duration','2s');
});
