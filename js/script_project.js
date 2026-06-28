window.addEventListener("scroll", function(){

const projects = document.querySelector(".projects-page");
const cta = document.querySelector(".projects-cta");

const screenPosition = window.innerHeight / 1.2;

if(projects){

if(projects.getBoundingClientRect().top < screenPosition){

projects.classList.add("show");

}

}

if(cta){

if(cta.getBoundingClientRect().top < screenPosition){

cta.classList.add("show");

}

}

});