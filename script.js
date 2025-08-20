const melodii = [
  "song6.mp3","song7.mp3","song8.mp3","song9.mp3","song10.mp3","song11.mp3",
  "song1.mp3","song2.mp3","song3.mp3","song4.mp3","song5.mp3","song12.mp3"
];
const cover = [
  "cover6.jpg","cover7.jpg","cover8.jpg","cover9.jpg","cover10.jpg","cover11.png",
  "cover1.jpg","cover2.jpg","cover3.jpg","cover4.jpg","cover5.jpg","cover12.jpg"
];
const piese = [
  "Chiamo io chiami tu","Külm","Kohoney","Lies lay cold","Tiki","Cand imi este foame",
  "In the middle","Vip","Dobrodosli","Desolee","Dum tek tek","Ela"
];
const artiste = [
  "Gaia","An-Marlen","Grisina","Ananda","Besa","Moto Rap Trap",
  "Natalia Barbu","J Kbello","Nina Zizic","Mentissa","Hadise","Andromache"
];

document.getElementById("audio").addEventListener("ended", function() {
  inainte();
});

function schimba(para){
  document.getElementById("audio").src = melodii[para-1];
  document.getElementById("imagine").src = cover[para-1];
  let melodie = document.getElementById("Melodie").textContent = piese[para-1];
  let artist = document.getElementById("Artist").textContent = artiste[para-1];
  adaugaInLista(melodie, artist);
}

function adaugaInLista(melodie, artist){
  let item = document.createElement("li");
  item.textContent = `${melodie} - ${artist}`;
  item.style.color = "rgb(3, 43, 28)";
  document.getElementById("B").append(item);
}


let ok = true;
function canta(){
  let audio = document.getElementById("audio");
  if(ok){ audio.play(); }
  else { audio.pause(); }
  ok = !ok;
}


let alegeri = [];
let i = -1;
function inainte(){
  i++;
  let random = Math.floor(Math.random()*melodii.length);
  alegeri.push(random);
  setMelodie(random);
}
function inapoi(){
  if (i>-1){
    let random = alegeri[i];
    i--;
    setMelodie(random);
    let lista = document.getElementById("B");
    if (lista.lastElementChild) lista.removeChild(lista.lastElementChild);
  } else {
    alert("Nu exista melodie anterioara!");
  }
}

function setMelodie(index){
  document.getElementById("audio").src = melodii[index];
  document.getElementById("imagine").src = cover[index];
  let melodie = document.getElementById("Melodie").textContent = piese[index];
  let artist = document.getElementById("Artist").textContent = artiste[index];
  adaugaInLista(melodie, artist);
}


function filtru(index){
  let imaginii = document.getElementsByClassName("imagine1");
  for(let i=0;i<imaginii.length;i++){
    imaginii[i].style.filter = "grayscale(100%)";
    if(i==index) imaginii[i].style.filter = "none";
    imaginii[i].classList.add("anim");
  }
}
function nu(){
  let imaginii = document.getElementsByClassName("imagine1");
  for(let i=0;i<imaginii.length;i++){
    imaginii[i].style.filter = "none";
    imaginii[i].classList.remove("anim");
  }
}
function filtru1(indexs , index){
  let imaginii = document.getElementsByClassName("imagine1");
  for(let i=indexs;i<index;i++){
    imaginii[i].classList.add("anim");
  }
}


let playlisturi = [
  ["song8.mp3","song10.mp3","song5.mp3","song2.mp3"],     
  ["song1.mp3","song3.mp3","song12.mp3","song7.mp3"],     
  ["song6.mp3","song5.mp3","song10.mp3","song11.mp3"],   
  ["song4.mp3","song10.mp3","song1.mp3","song2.mp3"]      
];
let playlistCurent = [];
let indexPlaylist = 0;

function stop(index){
  if(index>=1 && index<=playlisturi.length){
    playlistCurent = playlisturi[index-1];
    indexPlaylist = 0;
    let audio = document.getElementById("audio");
    audio.src = playlistCurent[indexPlaylist];
    audio.play();
  }
}

function inainte1(dir){
  if (playlistCurent.length === 0) return;
  indexPlaylist += dir;
  if (indexPlaylist < 0) indexPlaylist = playlistCurent.length - 1;
  if (indexPlaylist >= playlistCurent.length) indexPlaylist = 0;

  let audio = document.getElementById("audio");
  audio.src = playlistCurent[indexPlaylist];
  audio.play();
}

document.getElementById("dia").style.display = "none";
document.getElementById("noche").style.display = "none";
document.getElementById("s1").style.display = "none";  

function dispare(index){
    let v = ["Give me some DANCE","Calm Your Mind", "Chill Night" ,  "Summer Vibes"];
  let playlistNume = [
    ["Kohoney-Grisina","Tiki-Besa","Dum tek tek-Hadise","Vip-J Kbello"],
    ["In the middle-Natalia Barbu","Dobrodosli-Nina Zizic","Ela-Andromache","Külm-An-Marlen"],
    ["Chiamo io chiami tu-Gaia","Dum tek tek-Hadise","Tiki-Besa","Cand imi este foame-Moto Rap Trap"],
    ["Desolee-Mentissa","Tiki-Besa","In the middle-Natalia Barbu","Vip-J Kbello"]
  ];
  
  document.getElementById("Ce").style.display = "none";
  document.getElementById("imagine").src = `${index}.png`;
  document.getElementById("Artist").style.display ="none";
  document.getElementById("Melodie").textContent = v[index-1];
  document.getElementById("nu").textContent = "The playlist includes";
  document.getElementById("li").style.display = "none";
  document.getElementById("s1").style.display = "flex";
  document.getElementById("dia").style.display = "none";
  document.getElementById("noche").style.display = "none";
  document.getElementById("dia1").style.display = "block";
  document.getElementById("noche1").style.display = "block";

  let li1 = document.getElementById("li1");
  let li2 = document.getElementById("li2");
  let li3 = document.getElementById("li3");
  let li4 = document.getElementById("li4");
  li1.style.display = "block";
  li2.style.display = "block";
  li3.style.display = "block";
  li4.style.display = "block";

  li1.textContent = playlistNume[index-1][0];
  li2.textContent = playlistNume[index-1][1];
  li3.textContent = playlistNume[index-1][2];
  li4.textContent = playlistNume[index-1][3];
  alert("If you want to listen to the full playlist click on the buttons (< or >)!!! If you don't, the song will be choose random!")

  stop(index); // pornește playlistul
  document.getElementById("audio").removeEventListener("ended", function() {
  inainte();
});
}

function intoarcem(){
  document.getElementById("audio").addEventListener("ended", function() {
  inainte();
});
  document.getElementById("Ce").style.display = "block";
  document.getElementById("Artist").style.display ="block";
  document.getElementById("li").style.display = "block";
  document.getElementById("imagine").src = `cover6.jpg`;
  document.getElementById("Melodie").textContent = "Chiamo io chiami tu";
  document.getElementById("li1").style.display = "none";
  document.getElementById("li2").style.display = "none";
  document.getElementById("li3").style.display = "none";
  document.getElementById("li4").style.display = "none";
  document.getElementById("nu").textContent = "You listened to";
  document.getElementById("s1").style.display = "none";  
  document.getElementById("dia").style.display = "block";
  document.getElementById("noche").style.display = "block";
  document.getElementById("dia1").style.display = "none";
  document.getElementById("noche1").style.display = "none";
  document.getElementById("audio").src = `song6.mp3`
}