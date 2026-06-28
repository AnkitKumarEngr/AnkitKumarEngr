// Skills Page Animation

window.addEventListener("scroll", function(){

const skillsPage = document.querySelector(".skills-page");
const skillsCta = document.querySelector(".skills-cta");

const screenPosition = window.innerHeight / 1.2;

if(skillsPage){

if(skillsPage.getBoundingClientRect().top < screenPosition){

skillsPage.classList.add("show");

}

}

if(skillsCta){

if(skillsCta.getBoundingClientRect().top < screenPosition){

skillsCta.classList.add("show");

}

}

});