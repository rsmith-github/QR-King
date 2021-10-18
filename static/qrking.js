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
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      document.querySelector(".index-headline").parentElement.style.marginTop = "40%";
    } else {
      document.querySelector(".index-headline").parentElement.style.marginTop = "15%";
    }

});