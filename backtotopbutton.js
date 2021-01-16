/* Back to top button start */
const backToTopButton = document.querySelector("#back-to-top");
const mainBody = document.querySelector('body');
console.log(backToTopButton);
// Get parent div -- used for scroll 
const parent = document.querySelector('.parent');
console.log(parent);

// Event listner for button
backToTopButton.addEventListener("click",backToTop);
// backToTop function 
function backToTop(){
  parent.scrollTo(0,0);
}
/* Back to top End */
