// variables for previous button and next button

let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");

// variable for body and audio
let background = document.querySelector("#body");
let sound = document.querySelector("#my_audio");

// declaring array for storing colors
const arr = [];

// function for getting different colors each time we press next button

function colors(){
   
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    let color = '#' + n.slice(0, 6);
       arr.push(color);
    background.style.backgroundColor = color;
}

// calling colors function after clicking on button

btn.addEventListener('click', colors);

// function for audio

function audio(){
    sound.play();
}
// calling audio function on next button
btn.addEventListener('click', audio);

// function for getting previous color

function PrevColor(){
    let prev;
    let n = arr.length;
   
    for(let i =n-1; i>=0; i--){
          prev = arr[i];
      }
    background.style.backgroundColor = prev;
}

// calling prevcolor function on previous button

btn2.addEventListener('click', PrevColor);

