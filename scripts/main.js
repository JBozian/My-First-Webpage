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


function pictureChange() {
    document.getElementById('theImage').src = "http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
}
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/mr-lean.png") {
        myImage.setAttribute("src", "images/pim-screaming.png");
    } else {
        myImage.setAttribute("src", "images/mr-lean.png");
    }
});