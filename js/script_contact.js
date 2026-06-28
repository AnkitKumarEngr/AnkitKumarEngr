window.addEventListener("scroll",function(){

const sections=document.querySelectorAll("section");

sections.forEach(sec=>{

const position=sec.getBoundingClientRect().top;

const screen=window.innerHeight/1.3;

if(position<screen){

sec.classList.add("show");

}

});

});