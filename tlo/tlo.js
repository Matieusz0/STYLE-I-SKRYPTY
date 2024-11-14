const body = document.getElementById("body")

if(body){
    body.innerHTML = "<p>aaaaaaa</>";
}else{
    console.error("dupa nie ma body xd");
}

window.addEventListener("DOMContentLoaded", () => {
    //body.style.backgroundColor = "rgb(255, 0, 0";
    body.classList.add("body-green");
    body.classList.add("body-blue");

    //po 3000 ms usuwa kolor niebieski i zostawia zielony
    setTimeout(() => {
        body.classList.remove("body-blue");
    }, 3000);

    //co 1000 ms zmienia kolor tekstu
    setInterval(() => {
        body.classList.toggle("text-color")
    }, 1000);
});