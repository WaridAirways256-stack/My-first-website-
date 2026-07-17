// WaridAirways Tech Hub JavaScript

// Welcome message in browser console
console.log("Welcome to WaridAirways Tech Hub ✈️");


// Smooth reveal animation when scrolling

const sections = document.querySelectorAll(".section");

const reveal = () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

};


sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "1s";
});


window.addEventListener("scroll", reveal);

reveal();



// Current year update

const year = new Date().getFullYear();

console.log("WaridAirways Tech Hub - " + year);
