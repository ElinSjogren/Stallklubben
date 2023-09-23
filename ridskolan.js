//Här för att göra flikar till ridskolan. 

function oppnaFlik(evt, flikNamn) {
    var i;
    var flikInnehall;
    var flikLank;
    

//Göm alla flikarna
flikInnehall = document.getElementsByClassName("flikInnehall");
for(i=0; i<flikInnehall.length; i++){
    flikInnehall[i].style.display="none";
}
//Ta bort markerade flikenknappen
flikLank = document.getElementsByClassName("flikLank");
for(i=0;i<flikLank.length; i++) {
    flikLank[i].className = flikLank[i].className.replace("active", "");
}
//det vi har valt får en aktiv class
document.getElementById(flikNamn).style.display = "block";
evt.currentTarget.className += "active";

}

//formulärets knapp - lägg namnet i consolen.
document.getElementById("skickaknapp").onclick = function skickaFormular(){
    let ifylldFormular = document.getElementById("kontaktformular");
    const personMedIntresse = {namn: ifylldFormular.namn.value, mejladress: ifylldFormular.mejladress.value}
    console.log(personMedIntresse);
    return false;
}