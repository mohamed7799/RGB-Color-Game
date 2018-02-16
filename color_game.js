'use strict'
//variables
let hard=document.getElementById("hard");
let easy=document.getElementById("easy");
let colors=document.getElementsByClassName("color");
let New =document.getElementById("new");
let winColor=document.getElementById("win-color");
let Header=document.getElementById("head");
//functions
function genColor(){
    let arrColor =[];
    for(let i=0; i<3;i++){
        arrColor[i]=Math.floor(Math.random()*256);
    }
    return arrColor.join(", ");
}

function NEW(){
    Header.style.backgroundColor="";
    let temp;
    //hard
    if(hard.classList.contains("selected")){
    //to give color to all the grid elements 
    for(let i=0;i<colors.length;i++){
        if(colors[i].classList.contains("hide"));{
            colors[i].classList.remove("hide");
        }
        temp=genColor();
        colors[i].style.backgroundColor=`rgb(${temp})`;
        
    }
    // to match a color with the win color
    temp=genColor();
    let index=Math.floor(Math.random()*6);
    
    colors[index].style.backgroundColor=`rgb(${temp})`;
    winColor.innerText=`rgb(${temp})`;
    }
    //easy
    else{
        for(let i=0;i<3;i++){
            if(colors[i].classList.contains("hide"));{
                colors[i].classList.remove("hide");
            }
            temp=genColor();
            colors[i].style.backgroundColor=`rgb(${temp})`;
            
        }
        // to match a color with the win color
        temp=genColor();
        let index=Math.floor(Math.random()*3);
        colors[index].style.backgroundColor=`rgb(${temp})`;
        winColor.innerText=`rgb(${temp})`;
        
    }
        
}

function Hard(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    NEW();
    for(let i=3;i<colors.length;i++){
        colors[i].classList.remove("hide");
    }   
}

function Easy(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    NEW();
    for(let i=3;i<colors.length;i++){
        colors[i].classList.add("hide");
    }
}

function check(){
    if(this.style.backgroundColor==winColor.innerText){
        //hard mode
        if(hard.classList.contains("selected")){
        for(let i=0;i<colors.length;i++){
            if(colors[i].classList.contains("hide")){
                colors[i].classList.remove("hide");
            }
            colors[i].style.backgroundColor=this.style.backgroundColor;
        }
        Header.style.backgroundColor=this.style.backgroundColor;
        }
        //easy mode
        else{
            for(let i=0;i<3;i++){
                if(colors[i].classList.contains("hide")){
                    colors[i].classList.remove("hide");
                }
                colors[i].style.backgroundColor=this.style.backgroundColor;
            }
            Header.style.backgroundColor=this.style.backgroundColor;
        }
    }
    
    else{
        this.classList.add("hide");
        
    }
}

//eventlisteners

hard.addEventListener("click",Hard);

easy.addEventListener("click",Easy);

New.addEventListener("click",NEW);

for(let i=0;i<colors.length;i++){
    colors[i].addEventListener("click",check);
}

//main

NEW();




