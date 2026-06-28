// About Page Animation

window.addEventListener("scroll", function(){

const aboutPage = document.querySelector(".about-page");
const education = document.querySelector(".education-section");
const fun = document.querySelector(".fun-section");
const cta = document.querySelector(".about-cta");

const screenPosition = window.innerHeight / 1.2;

if(aboutPage){
if(aboutPage.getBoundingClientRect().top < screenPosition){
aboutPage.classList.add("show");
}
}

if(education){
if(education.getBoundingClientRect().top < screenPosition){
education.classList.add("show");
}
}

if(fun){
if(fun.getBoundingClientRect().top < screenPosition){
fun.classList.add("show");
}
}

if(cta){
if(cta.getBoundingClientRect().top < screenPosition){
cta.classList.add("show");
}
}

});