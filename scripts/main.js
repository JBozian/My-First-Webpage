myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
const myButton = document.querySelectorAll("button")[0];
const myFavortieButton = document.querySelector("button");
myButton.addEventListener("click", () => {
    if (myHeading.textContent === "I love Coding CHarlie! I love COOODING!!!") {
        myHeading.textContent = "Her names Shrimpina...";
    } else {
        myHeading.textContent = "I love Coding CHarlie! I love COOODING!!!";
    }
});

const myImage = document.querySelector("img");

function pictureChange() {
    myImage.src = "http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
}

function togglePicture() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/mr-lean.png") {
        myImage.setAttribute("src", "images/pim-screaming.png");
    } else {
        myImage.setAttribute("src", "images/mr-lean.png");

    }
}

myImage.addEventListener("click", togglePicture);

let myButton2 = document.querySelectorAll("button")[2];
let myHeading2 = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading2.textContent = `Mozilla is cool, ${myName}`;
    }
}


if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading2.textContent = `Mozilla is cool, ${storedName}`;
}

myButton2.addEventListener("click", () => {
    setUserName();
});
