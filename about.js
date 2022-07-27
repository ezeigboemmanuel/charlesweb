let toggleBtn = document.getElementById("bars");
let navUl = document.getElementById("nav-ul");
toggleBtn.addEventListener("click", () => {
    navUl.classList.toggle("show");
    console.log("clicked");
})