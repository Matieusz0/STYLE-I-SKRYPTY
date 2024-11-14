const body = document.getElementById("body");

//zmienne
let dir = true;
let min = 0, max = 255;
let currentValue = 0;


//kolor strony zwieksza sie i spada w rgb
window.addEventListener("DOMContentLoaded", () =>{
    setInterval(() => {
        //body.classList.toggle("body-color");
        if(currentValue === min){
            dir = true;
        }
        if(currentValue === max){
            dir = false;
        }

        if(dir){
            currentValue++;
        }else{
            currentValue--;
        }

        body.style.backgroundColor = `rgb(${currentValue}, 0, 0)`;
    }, 10);
});