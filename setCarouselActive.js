//Get the URL
var x = document.URL;
//Split the URL by #
var res = x.split("#");
//Set default active class
if (res.length == 1){
    document.getElementById('mechanical-engineering').classList.add('active');
}
//Set active class based on url
else{
    var activeElement = document.getElementById(res[1]);
    activeElement.classList.add("active");
}

