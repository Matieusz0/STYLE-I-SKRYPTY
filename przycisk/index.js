const bt1 = document.getElementById("bt1");
const pageLoadedOn = document.getElementById("hour");

if(!bt1){
    console.error("no bt1");
}

window.addEventListener("DOMContentLoaded", () =>{
    console.log(`page loaded on: ${new Date().toISOString()}`)
    if(pageLoadedOn){
        pageLoadedOn.innerHTML = new Date().toISOString();
    }
});

bt1.addEventListener("click", () => {
  console.log(new Date().toISOString());  
});