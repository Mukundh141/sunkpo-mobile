// Declaring section 
const services = document.querySelector('#services');
console.log(services);

const reasons = document.querySelector('#reasons');

//SubReasonHeading 
const subReasonHeading = document.querySelectorAll('.subReasonHeading');

// Services Circle 3
let servicesCircle = document.querySelector('.services-circle-3');
//servicesCircle.setProperty('animation-duration','2s');

//FadeInRight function
function fadeInRight(element) {
    element.classList.add('animate__animated','animate__pulse','animate__infinite');
    //element.setProperty('animation-duration','2s');
}

//HeartBeat function 
function  heartBeat(element) {
    //element.classList.add('animate__animated','animate__heartBeat','animate__repeat-2');
    element.forEach(function (item,index) {
        item.classList.add('animate__animated','animate__bounce','animate__repeat-1');
    })
}

// Create observer1
const observer = new IntersectionObserver(function(entries,observer){

    if(entries[0].isIntersecting ) {
        fadeInRight(servicesCircle);
    }

},options);

observer.observe(services);

let opt = {
    rootMargin : '0px 0px -500px 0px'
};

// Create observer 2 
const observer_2 = new IntersectionObserver(function(entries,observer_2){

    if(entries[0].isIntersecting) {
        heartBeat(subReasonHeading);
    }

},opt);

observer_2.observe(reasons);