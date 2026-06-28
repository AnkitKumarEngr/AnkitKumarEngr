
// text animation typing 

const roles = [
"Frontend Developer...",
"AI ML Engineer...",
"Data Scientist...",
"Graphic Designer..."
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.querySelector(".typing");

function type(){

if(charIndex < roles[roleIndex].length){

typing.textContent += roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(type,50);

}else{

setTimeout(erase,1500);

}

}

function erase(){

if(charIndex > 0){

typing.textContent = roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,30);

}else{

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

setTimeout(type,200);

}

}

document.addEventListener("DOMContentLoaded",function(){

setTimeout(type,1000);

});

// about section animation 
// About Scroll Animation

window.addEventListener("scroll", function(){

const about = document.querySelector(".about-section");

const position = about.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2;

if(position < screenPosition){

about.classList.add("show");

}

});

// Skills Scroll Animation

window.addEventListener("scroll", function(){

const skills = document.querySelector(".skills-section");

const position = skills.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2;

if(position < screenPosition){

skills.classList.add("show");

}

});

// Projects Scroll Animation

window.addEventListener("scroll", function(){

const projects = document.querySelector(".projects-section");

const position = projects.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2;

if(position < screenPosition){

projects.classList.add("show");

}

});

// Services Scroll Animation

window.addEventListener("scroll", function(){

const services = document.querySelector(".services-section");

const position = services.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2;

if(position < screenPosition){

services.classList.add("show");

}

});