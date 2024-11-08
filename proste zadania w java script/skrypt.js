function Pierwszy(){
    alert("pierwszy przycisk");
}
//wyswietla alert gdy kliknie sie w przycisk
const bt2 = document.getElementById("bt2");
if(bt2){
    bt2.addEventListener("click", () => {
        alert("Drugi przycisk");
    });
}
//wyswietla w konsoli co wpisalismy w pole tekstowe
const txtImie = document.getElementById("txtImie");
if(txtImie){
    txtImie.addEventListener("change", () => {
        console.log(txtImie.value);
    });
}
//wyswietla w konsoli co wybralismy z dostepnych opcji z listy
const cbMiasta = document.getElementById("cbMiasta");
if(cbMiasta){
    cbMiasta.addEventListener("change", () => {
        console.log(`Miasto: ${cbMiasta.value}`)
    });
}
//wyswietla wartosc suwaka
//input - zmienia wartosc odrazu
//change - zmienia wartosc po puszczeniu suwaka
const rngRed = document.getElementById("rngRed");
const txtRed = document.getElementById("txtRed");
const rngGreen = document.getElementById("rngGreen");
const txtGreen = document.getElementById("txtGreen");
const rngBlue = document.getElementById("rngBlue");
const txtBlue = document.getElementById("txtBlue");

if(rngRed && txtRed){
    rngRed.addEventListener("input", () => {
        txtRed.value = rngRed.value;
        document.body.style.backgroundColor = `rgb(${rngRed.value}, 0, 0)`;
    });
}

if(rngGreen && txtGreen){
    rngGreen.addEventListener("input", () => {
        txtGreen.value = rngGreen.value
    });
}

if(rngBlue && txtBlue){
    rngBlue.addEventListener("input", () => {
        txtBlue.value = rngBlue.value
    });
}
//skrypt ktory pozwala zaladowac rzeczy podczas odpalenia strony
window.addEventListener("DOMContentLoaded", () => {
    txtRed.value = rngRed.value;
    txtGreen.value = rngGreen.value;
    txtBlue.value = rngBlue.value;
    document.body.style.backgroundColor = `rgb(${rngRed.value}, ${rngGreen.value}, ${rngBlue.value})`;
    bt2.innerText = "dupa";
});
