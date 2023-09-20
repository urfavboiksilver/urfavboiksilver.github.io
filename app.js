let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
};

function addClassToDiv() {
    var div = document.getElementById("opacity");
    if (div.classList.contains("show")) {
        div.classList.remove("show");
    } else {
        div.classList.add("show");
    }
}

const transition = document.getElementById('transition');


setTimeout(function () {
    transition.classList.add('shown');
}, 1000);

function redirect(element) {
    var linkHref = element.getAttribute("data-href");
    transition.classList.remove('shown');

    var xhr = new XMLHttpRequest();

    xhr.open("HEAD", linkHref, true);
    setTimeout(function (){
       xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                window.location.href = linkHref;
            } else {
                window.location.href = "underconstruction.html";
            }
        }
    };
    xhr.send();
    },1500);
}
