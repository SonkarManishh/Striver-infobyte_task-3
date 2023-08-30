const music = document.querySelector("audio");
const img = document.querySelector(".anime");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title1 = document.getElementById("title1");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
    name: ("music1" ),
    title1: "Phir Kabhi",
    artist: "Arijit Singh",
    profile: "img9",
    },
    {
    name: ("music2" ),
    title1: "Saware",
    artist: "Arijit Singh",
    profile: "img2",
    },
    {
    name: ("music3" ),
    title1: "Heat waves",
    artist: "Glass Animals",
    profile: "img4",
    },
    {
    name: ("music4" ),
    title1: "Halo Halo",
    artist: "Lisa",
    profile: "img5",
    },
    {
    name: ("music5" ),
    title1: "Sanorita",
    artist: "Camila cab",
    profile: "img1",
    },
    {
    name: ("music6" ),
    title1: "Without Me",
    artist: "Halsey",
    profile: "img6",
    },
    {
    name: ("music7" ),
    title1: "Dzanum ",
    artist: "Teya Dora",
    profile: "img7",
    },
]

let isplaying = false;
// for play function
const playMusic= ()=> {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
// for pause function
const pauseMUsic=() => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click',() => {
    if(isplaying) { 
        pauseMUsic();
    }else{
        playMusic();
    }

});

const loadSong = (songs) => {
    title1.textContent = songs.title1;
    artist.textContent = songs.artist;
    music.src = "music-file/" + songs.name + ".mp3";
    img.src = "img-file/" + songs.profile + ".jpg";
};

songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
