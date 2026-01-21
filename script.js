// Window scroll event listener
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");

    // Jar scroll 20px peksha jasta zala, tar "scrolled" class add kar
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});