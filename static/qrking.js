// Under construction

let alert = document.querySelector('.alert')
if (alert.innerHTML.includes("URL")) {
    alert.classList.add("error");
    alert.classList.remove("border");
}