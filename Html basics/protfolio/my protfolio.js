const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{
card.addEventListener("mouseenter",()=>{
card.style.boxShadow="0 0 20px #38bdf8";
});

card.addEventListener("mouseleave",()=>{
card.style.boxShadow="none";
});
});

window.addEventListener("scroll",()=>{
const sections=document.querySelectorAll("section");

sections.forEach(section=>{
const top=window.scrollY;
const offset=section.offsetTop-300;
if(top>offset){
section.style.opacity="1";
section.style.transform="translateY(0)";
}
});
});