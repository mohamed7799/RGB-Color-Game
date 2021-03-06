'use strict'
//variables
let hard = document.getElementById("hard");
let easy = document.getElementById("easy");
let colors = document.getElementsByClassName("color");
let Colors = document.getElementById("colors");
let New = document.getElementById("new");
let winColor = document.getElementById("win-color");
let Header = document.getElementById("head");
let tryAgian = document.getElementById("wrong");

//functions
function genColor() {
    let arrColor = [];
    for (let i = 0; i < 3; i++) {
        arrColor[i] = Math.floor(Math.random() * 256);
    }
    return arrColor.join(", ");
}

function renderMode(temp, mode) {
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].classList.contains("hide")); {
            colors[i].classList.remove("hide");
        }
        temp = genColor();
        colors[i].style.backgroundColor = `rgb(${temp})`;

    }
    // to match a color with the win color
    temp = genColor();
    let index = Math.floor(Math.random() * mode);
    colors[index].style.backgroundColor = `rgb(${temp})`;
    winColor.innerText = `rgb(${temp})`;
}

function NEW() {
    tryAgian.style.visibility = "hidden";
    tryAgian.textContent = "try agian";
    Header.style.backgroundColor = "";
    let temp;
    //hard
    if (hard.classList.contains("selected")) {

        renderMode(temp, 6);
    }
    //easy
    else {
        renderMode(temp, 3);

    }

}

function clickMode(onMode, ofMode) {
    return function () {
        onMode.classList.add("selected");
        ofMode.classList.remove("selected");
        NEW();
        for (let i = 3; i < colors.length; i++) {
            if (onMode === hard) {
                colors[i].classList.remove("hide");
            }
            else {
                colors[i].classList.add("hide");
            }
        }

    }
}

function winMode(mode, x) {
    for (let i = 0; i < mode; i++) {
        if (colors[i].classList.contains("hide")) {
            colors[i].classList.remove("hide");
        }
        colors[i].style.backgroundColor = x.style.backgroundColor;
    }
    Header.style.backgroundColor = x.style.backgroundColor;
}

//eventlisteners

hard.addEventListener("click", clickMode(hard, easy));

easy.addEventListener("click", clickMode(easy, hard));

New.addEventListener("click", NEW);

Colors.addEventListener("click", function (e) {
    let x = e.target;
    //to make sure that the clicked item belong to Colors
    if (x.className != 'color') return;

    //win
    if (x.style.backgroundColor == winColor.innerText) {
        tryAgian.style.visibility = "visible";
        tryAgian.textContent = "You Won";
        //hard mode
        if (hard.classList.contains("selected")) {
            winMode(6, x);
        }
        //easy mode
        else {
            winMode(3, x);
        }
    }
    //lose
    else {
        x.classList.add("hide");
        tryAgian.style.visibility = "visible";
    }
});

//main

NEW();




