const typingText = document.querySelector(".typing-text");

const words = [
    "Web Developer",
    "AI/ML Student",
    "UI/UX Enthusiast",
    "Creative Coder"
];

let wordIndex = 0;
let letterIndex = 0;

let currentWord = "";

let currentLetters = "";

function type(){

    if(wordIndex < words.length){

        currentWord = words[wordIndex];

        currentLetters = currentWord.slice(0, ++letterIndex);

        typingText.textContent = currentLetters;

        if(currentLetters.length === currentWord.length){

            setTimeout(deleteText, 1200);

            return;
        }

        setTimeout(type, 100);

    }

}

function deleteText(){

    currentLetters = currentWord.slice(0, --letterIndex);

    typingText.textContent = currentLetters;

    if(letterIndex > 0){

        setTimeout(deleteText, 60);

    }

    else{

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;
        }

        setTimeout(type, 200);
    }

}

type();

window.addEventListener('scroll', reveal);

function reveal(){

    const reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){

        const windowHeight = window.innerHeight;

        const revealTop = reveals[i].getBoundingClientRect().top;

        const revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add('active');

        }

    }

}
reveal();

const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {

    cursorGlow.style.left = e.clientX + 'px';

    cursorGlow.style.top = e.clientY + 'px';

});