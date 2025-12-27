document.addEventListener("DOMContentLoaded", () => {

    // 🧪 TEST MODE (10 sec)
    const birthday = Date.now() + 10000;

    const countdown = document.getElementById("countdown");
    const message = document.getElementById("message");
    const slideshow = document.querySelector(".slideshow");
    const letterBtn = document.getElementById("letterBtn");

    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    let started = false;

    function update() {
        const diff = birthday - Date.now();
        if (diff <= 0) {
            if (started) return;
            started = true;
            countdown.classList.add("hidden");
            message.classList.remove("hidden");
            slideshow.classList.remove("hidden");
            letterBtn.classList.remove("hidden");
            return;
        }
        d.innerText = Math.floor(diff / 86400000);
        h.innerText = Math.floor((diff / 3600000) % 24);
        m.innerText = Math.floor((diff / 60000) % 60);
        s.innerText = Math.floor((diff / 1000) % 60);
    }

    update();
    setInterval(update, 1000);

    const photos = [
        "photo1.jpeg","photo2.jpeg","photo3.jpeg","photo4.jpeg",
        "photo5.jpeg","photo6.jpeg","photo7.jpeg","photo8.jpeg"
    ];

    let i = 0;
    const img = document.getElementById("slideImage");

    setInterval(() => {
        if (!started) return;
        img.style.opacity = 0;
        setTimeout(() => {
            i = (i + 1) % photos.length;
            img.src = "photos/" + photos[i];
            img.style.opacity = 1;
        }, 600);
    }, 4000);
});

function openLetter() {
    const letter = document.getElementById("letter");
    letter.classList.remove("hidden");
    letter.scrollIntoView({ behavior: "smooth" });
}

function playMusic() {
    const m = document.getElementById("music");
    m.paused ? m.play() : m.pause();
}

/* HEARTS */
setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = ["💖","💕","💗","💞"][Math.floor(Math.random()*4)];
    h.style.left = Math.random()*100 + "vw";
    h.style.fontSize = (18 + Math.random()*20) + "px";
    h.style.animationDuration = (6 + Math.random()*4) + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 9000);
}, 500);
