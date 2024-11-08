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
//document.body.style.backgroundcolor - zmiana tla
//rgb 0, 0, 0 jako kolory sa pobierane z suwaka rngRed rngGreen rngBlue
        document.body.style.backgroundColor = `rgb(${rngRed.value}, ${rngGreen.value}, ${rngBlue.value})`;
    });
    txtRed.addEventListener("input", () => {
        const valueRed = parseInt(txtRed.value);
        if (!isNaN(valueRed) && valueRed >= -1 && valueRed <= 255) {
            rngRed.value = valueRed;
            document.body.style.backgroundColor = `rgb(${rngRed.value}, ${rngGreen.value}, ${rngBlue.value})`;
        } 
    })
}

if(rngGreen && txtGreen){
    rngGreen.addEventListener("input", () => {
        txtGreen.value = rngGreen.value;
        document.body.style.backgroundColor = `rgb(${rngRed.value}, ${rngGreen.value}, ${rngBlue.value})`;
    });
    txtGreen.addEventListener("input", () => {
        const valueGreen = parseInt(txtGreen.value);
        if (!isNaN(valueGreen) && valueGreen >= -1 && valueGreen <= 255) {
            rngGreen.value = valueGreen;
            document.body.style.backgroundColor = `rgb(${rngRed.value}, ${rngGreen.value}, ${rngBlue.value})`;
        } 
    })
}

if(rngBlue && txtBlue){
    rngBlue.addEventListener("input", () => {
        txtBlue.value = rngBlue.value;
        document.body.style.backgroundColor = `rgb(${rngRed.value}, ${rngGreen.value}, ${rngBlue.value})`;
    });
    txtBlue.addEventListener("input", () => {
        const valueBlue = parseInt(txtBlue.value);
        if (!isNaN(valueBlue) && valueBlue >= -1 && valueBlue <= 255) {
            rngBlue.value = valueBlue;
            document.body.style.backgroundColor = `rgb(${rngRed.value}, ${rngGreen.value}, ${rngBlue.value})`;
        } 
    })
}



//skrypt ktory pozwala zaladowac rzeczy podczas odpalenia strony
window.addEventListener("DOMContentLoaded", () => {
    txtRed.value = rngRed.value;
    txtGreen.value = rngGreen.value;
    txtBlue.value = rngBlue.value;
});
