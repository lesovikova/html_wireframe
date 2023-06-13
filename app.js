const heading = document.getElementById("heading");
const changeButton = document.querySelector('.button__item');

const headerLinks = document.querySelectorAll('.header__menu-link, h2, h3, .footer__link');

const nodesArray = [heading, changeButton, ...headerLinks];


let userName = prompt("What is your user name?");

compareName();

// Changes heading depending on what user puts in a prompt
function compareName(){
if(userName === "Admin") {
    heading.textContent = "Hello Admin"; 
} else {
    heading.textContent = `${userName}, you don't have the rights to access the page`;
}
}

// Creates random number from 0 to 255;
const getRandomNumber = () => {
    return Math.floor(Math.random() * 256);
}

// creates random number in RGB format
function getRandomRGB(number) {
    let RGB = [];
    for(let i=0; i<3; i++) {
RGB.push(number());
    }
    return RGB.toString();
}

// on click changes all colors on the page to random
changeButton.addEventListener("click", (e) => {
    nodesArray.forEach((item) => {
        item.style.color = `rgb(${getRandomRGB(getRandomNumber)})`;
    });
    changeButton.style.backgroundColor = `rgb(${getRandomRGB(getRandomNumber)})`;
});


// BURGER MENU
const burgerBTN = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');
// document.querySelector('.menu-btn').classList.add("active");
burgerBTN.addEventListener("click", () => {
    burgerBTN.classList.toggle("active");
    // headerMenu.classList.toggle('hidden');
    headerMenu.classList.toggle('open');
})