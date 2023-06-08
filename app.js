const heading = document.getElementById("heading");

let userName = prompt("What is your user name");
compareName();

function compareName(){
if(userName === "Admin") {
    heading.textContent = "Hello Admin"; 
} else {
    heading.textContent = "You don't have the rights to access the page";
}
}

