const hamburger = document.querySelector(".hamburguesa");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


var acc = document.getElementsByClassName("accordion");
var i;

// ciclo
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//animacion acordeon
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//validar
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validar);
});

function validar(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('name').value;
    var correo = document.getElementById('email').value;
    var comentario = document.getElementById('subject').value;
    if (nombre == "" || correo == "" || comentario == "") {
        Swal.fire({
            title: 'Porfavor revise los campos',
            width: 600,
            padding: '3em',
            backdrop: `
            #0419bb4f
            `
        });
        return;
    } else {
        Swal.fire({
            title: 'Su mensaje ha sido enviado',
            text: 'Pronto nos comunicaremos con usted',
            width: 600,
            padding: '3em',
            backdrop: `
            #0419bb4f
            `
        });

        document.getElementById('form').reset();
    }
}


//lightbox
function openModal() {
    document.getElementById("myModal").style.display = "block";
}


function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


mybutton = document.getElementById("myBtn");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}