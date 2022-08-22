const colors = ["green", "red", "yellow","turquoise","gray","purple", "Black","blue","silver", "White","orange","pink"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
