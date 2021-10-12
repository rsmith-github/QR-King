document.addEventListener("DOMContentLoaded", function () {

    let linkForm = document.querySelector("#link");
    linkForm.onsubmit = function() {
        let alert = document.querySelector('.alert')
        if (alert.innerHTML.includes("URL")) {
            alert.style.backgroundColor = "#ED4337";
            alert.style.color = "white";
            alert.style.border = "none";
            alert.classList.remove(".border");
        }
    }
});