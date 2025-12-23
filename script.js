document.addEventListener("DOMContentLoaded", () => {

    // ===== BIRTHDAY COUNTDOWN =====
    const birthday = new Date("2026-02-27T00:00:00").getTime();

    const countdownEl = document.getElementById("countdown");
    const messageEl = document.getElementById("message");
    const slideshowEl = document.querySelector(".slideshow");

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    let slideshowStarted = false;

    function updateCountdown() {
    const now = Date.now();
    const diff = birthday - now;

    if (diff <= 0) {
        countdownEl.classList.add("hidden");
        messageEl.classList.remove("hidden");
        slideshowEl.classList.remove("hidden");
        slideshowStarted = true;
        return;
    }

    daysEl.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    hoursEl.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutesEl.innerText = Math.floor((diff / (1000 * 60)) % 60);
    secondsEl.innerText = Math.floor((diff / 1000) % 60);
}

updateCountdown();               // run once immediately
setInterval(updateCountdown, 1000); // update every second

    // ===== PHOTO SLIDESHOW =====
    const photos = [
        { src: "photos/photo1.jpg", text: "Our first beautiful memory ❤️" },
        { src: "photos/photo2.jpg", text: "Every moment with you is special 💕" },
        { src: "photos/photo3.jpg", text: "Forever us 💖" },
        { src: "photos/photo4.jpg", text: "You are my everything 💖" },
        { src: "photos/photo5.jpg", text: "Our first beautiful memory ❤️" },
        { src: "photos/photo6.jpg", text: "You and me forever 💕" },
        { src: "photos/photo7.jpg", text: "Making memories with you 💖" },
        { src: "photos/photo8.jpg", text: "My heart belongs to you 💞" },
    ];

    let photoIndex = 0;
    const slideImage = document.getElementById("slideImage");
    const caption = document.getElementById("caption");

    setInterval(() => {
        if (!slideshowStarted) return;
        photoIndex = (photoIndex + 1) % photos.length;
        slideImage.src = photos[photoIndex].src;
        caption.innerText = photos[photoIndex].text;
    }, 4000);

});

// ===== MUSIC CONTROL (OUTSIDE DOMContentLoaded) =====
function playMusic() {
    const music = document.getElementById("music");
    const btn = document.querySelector("button");

    music.volume = 0.7;

    if (music.paused) {
        music.play();
        btn.innerText = "⏸ Pause Music";
    } else {
        music.pause();
        btn.innerText = "▶️ Play Music";
    }
}