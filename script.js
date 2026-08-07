let currentSlide = 0;

const slides = document.querySelectorAll(".slide");


function nextSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");
}


/* Auto sparkle message effect */

const messages = [
    "🌸 Hello Mouni Akkaaa 💖",
    "✨ You are special ✨",
    "😊 Keep smiling always",
    "🌈 Stay happy forever"
];


let i = 0;

setInterval(() => {

    document.title = messages[i];

    i++;

    if(i >= messages.length){
        i = 0;
    }

},2000);
