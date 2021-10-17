// Under construction
document.addEventListener("DOMContentLoaded", function () {

    // let alert = document.querySelector('.alert')
    // if (alert.innerHTML.includes("URL")) {
    //     alert.classList.add("error");
    //     alert.classList.remove("border");
    // }

    
    var loc = window.location.href; // returns the full URL
    if(/login/.test(loc) || /register/.test(loc)) {
        document.querySelector("main").style.marginTop = "10%";
      }

    //   add margin to index page
    document.querySelector(".index-headline").parentElement.style.marginTop = "15%";

});