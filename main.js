let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener("mousemove",cursor);

function cursor(e) {
    mouseCursor.style.top =e.pageY + "px";
    mouseCursor.style.left =e.pageX + "px";
}

navLinks.forEach(link => {
    link.addEventListener("mouseleave",() => {
        mouseCursor.ClassList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
    link.addEventListener("mouseover",() => {
        mouseCursor.ClassList.add("link-grow");
        link.classList.add("hovered-link");
    });  
}); 