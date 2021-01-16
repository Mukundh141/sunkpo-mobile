// Setting the default to engineering
$(document).ready(function(){
    $(".engineering").addClass("active");
    $("#engineering-card-wrapper").addClass("active-card");
    $("#it-card-wrapper").addClass("deactive-card");
    //Getting the section id 
    const jobs = document.querySelector("#jobs");
    jobs.style.height = '800px';

    //Media query for screenWidth 
    const screenWidth = window.matchMedia("(max-width: 450px)");

    //Create variables for pixels 
    let heightInPx_desktop_engineering = '800px';
    let heightInPx_desktop_it= '1500px';
    let heightInPx_mobile_engineering = '1210px';
    let heightInPx_mobile_it='1950px';

    //Create function to check the scree width
    function checkScreenWidthIntial(screenWidth) {
        if(screenWidth.matches){
            jobs.style.height = heightInPx_mobile_engineering;
        }
        else{
            jobs.style.height =  heightInPx_desktop_engineering;
        }
    }
    checkScreenWidthIntial(screenWidth);

});



// Get the class name of the h3 element when clicked
$("h3").click(function() {
    var className = $(this).attr("class");
    if (className == "IT"){
        $(".IT").addClass("active");
        $("#it-card-wrapper").addClass("active-card");
        $("#it-card-wrapper").removeClass("deactive-card");
        $(".engineering").removeClass("active");
        $("#engineering-card-wrapper").addClass("deactive-card");
        $("#engineering-card-wrapper").removeClass("active-card");
        //Media query for screenWidth 
        const screenWidth = window.matchMedia("(max-width: 450px)");
        //Create variables for pixels 
        let heightInPx_desktop_engineering = '800px';
        let heightInPx_desktop_it= '1500px';
        let heightInPx_mobile_engineering = '1200px';
        let heightInPx_mobile_it='2700px';
        //Create function to check the scree width and set IT
        function checkScreenWidthIT(screenWidth) {
            if(screenWidth.matches){
                jobs.style.height = heightInPx_mobile_it;
            }
            else{
                jobs.style.height =  heightInPx_desktop_it;
            }
        }
        checkScreenWidthIT(screenWidth);
    }
    else{
        $(".IT").removeClass("active");
        $("#it-card-wrapper").addClass("deactive-card");
        $("#it-card-wrapper").removeClass("active-card");
        $(".engineering").addClass("active");
        $("#engineering-card-wrapper").addClass("active-card");
        $("#engineering-card-wrapper").removeClass("deactive-card");
        //Media query for screenWidth 
        const screenWidth = window.matchMedia("(max-width: 450px)");
        //Create variables for pixels 
        let heightInPx_desktop_engineering = '800px';
        let heightInPx_desktop_it= '1500px';
        let heightInPx_mobile_engineering = '1200px';
        let heightInPx_mobile_it='2700px';
        //Create function to check the scree width and set IT
        function checkScreenWidthEngineering(screenWidth) {
            if(screenWidth.matches){
                jobs.style.height = heightInPx_mobile_engineering;
                console.log('Hi');
            }
            else{
                jobs.style.height =  heightInPx_desktop_engineering;
            }
        }
        checkScreenWidthEngineering(screenWidth);
    }
});

