const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
    menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
    menuNav.classList.remove("menu-active");
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    var video2 = document.getElementById('background-video2');
    var playButton = document.getElementById('play-button');
    var playButton2 = document.getElementById('play-button2');
    
    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.muted = false;
            video.play();
            playButton.style.display = 'none'; // Sembunyikan tombol setelah diputar
        } else {
            video.pause();
            playButton.style.display = 'block'; // Tampilkan kembali tombol saat video dijeda
        }
    });

    playButton2.addEventListener('click', function() {
        if (video2.paused) {
            video2.muted = false;
            video2.play();
            playButton2.style.display = 'none'; // Sembunyikan tombol setelah diputar
        } else {
            video2.pause();
            playButton2.style.display = 'block'; // Tampilkan kembali tombol saat video dijeda
        }
    });
});


const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


