const roles = [
    "Junior Core Banking Developer",
    "PHP Developer",
    "Oracle SQL Developer",
    "PL/SQL Developer",
    "Future Data Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);

}

typeEffect();

/*====================
Now every section fades in while scrolling.
================*/

const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el=>{

observer.observe(el);

});

/*====================
Active Navigation
=================*/

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

/* ==============
Navbar Shadow
===========*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",
window.scrollY>50);

});