function setActiveLink(element) {
    var links = document.querySelectorAll('header nav a');
    [...links].forEach(a => {
        a.classList.remove('active-link');
    });

   element.className = "active-link";
}