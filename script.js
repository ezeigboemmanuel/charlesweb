const toggleBtn = document.getElementsByClassName("toggleclass")[0];
const navbar = document.getElementById("nav");
toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
})