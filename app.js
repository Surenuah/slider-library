const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottomDiv = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "dot";
    bottomDiv.appendChild(div);
}

const buttons = document.querySelectorAll(".dot");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
    buttons.forEach(dot => {
        dot.style.backgroundColor = "transparent";
    })
};

buttons.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        resetBg();
        slider.style.transform = `translateX(-${i * 800}px)`;
        slideNumber = i + 1;
        dot.style.backgroundColor = "white";
    });
});

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
};

const previousSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
};

const changeColor = () => {
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "white";
};

rightArrow.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    changeColor();
});

leftArrow.addEventListener("click", () => {
    slideNumber > 1 ? previousSlide() : getLastSlide();
    changeColor();
});