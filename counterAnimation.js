/* Counter Start */
const counters = document.querySelectorAll('.counter');
console.log(counters);

function runCounter(){
  counters.forEach(counter => {
    counter.innerText = 0;
    let target = +counter.dataset.count;
    let step = target / 100;
    console.log(target);

    let countIt = function(){
      let displayedCount = +counter.innerText;
      if(displayedCount < target ){
        counter.innerText = Math.ceil(displayedCount + step);
        setTimeout(countIt,1);
      }
      else{
        counter.innerText = target;
      }
      console.log(displayedCount);
    }
  countIt();
  })
}



let counterSection = document.querySelector('.counters');
let options = {
  rootMargin : '0px 0px -300px 0px'
}
let done =0;
const sectionObserver = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting && done!==1){
      done = 1;
      runCounter();
    }
}, options)

sectionObserver.observe(counterSection);





/* Counter End */