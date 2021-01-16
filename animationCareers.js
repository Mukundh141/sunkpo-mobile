// Declaring section 
const culture = document.querySelector('#culture');
const benifits = document.querySelector('#benifits');
console.log(benifits);
const jobsSection = document.querySelector('#jobs');

//Elements
const subReasonHeading = document.querySelectorAll('.subReasonHeading');

const subReasonHeading2 = document.querySelectorAll('.subReasonHeadingBenifits');
console.log(subReasonHeading2);

const benifitsCircle1 = document.querySelector('.benifits-circle-1');
const benifitsCircle2 = document.querySelector('.benifits-circle-2');
const jobsCircle = document.querySelector('.jobs-circle');

//Shake function 
function  Shake(element) {
    //element.classList.add('animate__animated','animate__heartBeat','animate__repeat-2');
    element.forEach(function (item,index) {
        item.classList.add('animate__animated','animate__headShake','animate__repeat-1');
    })
}

//Pulse function 
//function pulse(element) {
//    element.classList.add('animate__animated','animate__pulse','animate__infinite');
//}


//HeartBeat function 
function  heartBeat(element) {
    //element.classList.add('animate__animated','animate__heartBeat','animate__repeat-2');
    element.forEach(function (item,index) {
        item.classList.add('animate__animated','animate__bounce','animate__repeat-1');
    })
}

//Zoom in function 
function zoomIn(element) {
    element.classList.add('animate__animated','animate__zoomIn');
}


let opt = {
    rootMargin : '0px 0px -550px 0px'
};
// Create observer 2 
const observer_2 = new IntersectionObserver(function(entries,observer_2){

    if(entries[0].isIntersecting) {
        heartBeat(subReasonHeading);
    }

},opt);
// Create observer 3
let opt_benifits = {
    rootMargin : '0px 0px -600px 0px'
};

observer_2.observe(culture);

const observeBenifits = new IntersectionObserver(function (entries,observeBenifits) {
    
    if(entries[0].isIntersecting){
        Shake(subReasonHeading2);
    }
}, opt_benifits);

observeBenifits.observe(benifits);

// Create observer 3
let opt_jobs = {
    rootMargin : '0px 0px -500px 0px'
};

observer_2.observe(culture);

const observeJobs = new IntersectionObserver(function (entries,observeJobs) {
    
    if(entries[0].isIntersecting){
        zoomIn(jobsCircle);
    }
}, opt_jobs);

observeJobs.observe(jobsSection);
