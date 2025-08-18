const melodii = ["song6.mp3","song7.mp3","song8.mp3","song9.mp3","song10.mp3","song11.mp3", "song1.mp3", 'song2.mp3', "song3.mp3", "song4.mp3", "song5.mp3", "song12.mp3"];
const cover = ["cover6.jpg","cover7.jpg","cover8.jpg","cover9.jpg","cover10.jpg","cover11.png","cover1.jpg" ,"cover2.jpg" ,"cover3.jpg" ,"cover4.jpg" ,"cover5.jpg" ,"cover12.jpg"];
const piese = ["Chiamo io chiami tu" , "Külm" , "Kohoney" , "Lies lay cold" , "Tiki" , "Cand imi este foame" , "In the middle" , "Vip", "Dobrodosli", "Desolee" , "Dum tek tek" , "Ela"];
const artiste = ["Gaia" , "An-Marlen" , "Grisina" , "Ananda" , "Besa", "Moto Rap Trap", "Natalia Barbu" , "J Kbello" , "Nina Zizic", "Mentissa","Hadise","Andromache"]
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
    item.style.color = "rgb(3, 43, 28);";
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
    item.style.color = "rgb(3, 43, 28);";
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


function filtru(index){
    let imaginii = document.getElementsByClassName("imagine1");
    for(let i=0;i<imaginii.length;i++)
    {
    imaginii[i].style.filter = "grayscale(100%)";
    if(i==index)
    imaginii[i].style.filter = "none";
    imaginii[i].classList.add("anim");
    }
}

function nu(){
     let imaginii = document.getElementsByClassName("imagine1");
    for(let i=0;i<imaginii.length;i++)
    {
    imaginii[i].style.filter = "none";
    imaginii[i].classList.remove("anim");
    }
    }
function filtru1(){
    let imaginii = document.getElementsByClassName("imagine1");
    for(let i=0;i<imaginii.length;i++)
    {
    imaginii[i].classList.add("anim");
    }

}