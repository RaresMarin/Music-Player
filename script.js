const melodii = ["song6.mp3","song7.mp3","song8.mp3","song9.mp3","song10.mp3","song11.mp3"];
const cover = ["cover6.jpg","cover7.jpg","cover8.jpg","cover9.jpg","cover10.jpg","cover11.png"];
const piese = ["Chiamo io chiami tu" , "Külm" , "Kohoney" , "Lies lay cold" , "Tiki" , "Cand imi este foame"];
const artiste = ["Gaia" , "An-Marlen" , "Grisina" , "Ananda" , "Besa", "Moto Rap Trap"]
document.getElementById("audio").addEventListener("ended", function() {
    inainte();

});

function schimba(para){
    document.getElementById("audio").src = melodii[para-1];
    document.getElementById("imagine").src = cover[para-1];
    let melodie = document.getElementById("Melodie").textContent = piese[para-1];
    let artist = document.getElementById("Artist").textContent = artiste[para-1];
    let item = document.createElement("li");
    item.textContent = `${melodie}-${artist}`;
    item.style.color = "rgba(192, 245, 193, 0.621)";
    let lista = document.getElementById("B");
    lista.append(item)
}
    let ok=true;
function canta(){
    if(ok)
    {
    document.getElementById("audio").play();
    }
    else{
    document.getElementById("audio").pause();
    }
    ok= !ok;
}
let alegeri = [];
let i=-1;
function inainte(){
    i++
    let random = Math.floor(Math.random()*melodii.length);
    alegeri.push(random);
    document.getElementById("audio").src = melodii[random];
    document.getElementById("imagine").src = cover[random];
    let melodie = document.getElementById("Melodie").textContent = piese[random];
    let artist = document.getElementById("Artist").textContent = artiste[random];
    let item = document.createElement("li");
    item.textContent = `${melodie}-${artist}`;
    item.style.color = "rgba(192, 245, 193, 0.621)";
    let lista = document.getElementById("B");
    lista.append(item)
    
}
function inapoi(){
    if (i>-1)
    {
        let random = alegeri[i];
        i--;
    document.getElementById("audio").src = melodii[random];
    document.getElementById("imagine").src = cover[random];
    document.getElementById("Melodie").textContent = piese[random];
    document.getElementById("Artist").textContent = artiste[random];
    let lista = document.getElementById("B");
    if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
}
    }
    else
    {
        alert("Nu exista melodie anterioara!!!!")
    }
}