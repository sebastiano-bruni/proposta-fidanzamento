const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

// Stile e dimensioni canvas
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;
canvas.style.pointerEvents = 'none';

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let particles = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createFirework() {
    const x = random(0, canvas.width);
    const y = random(0, canvas.height / 2);
    const count = 80;
    for (let i = 0; i < count; i++) {
        particles.push({
            x,
            y,
            radius: random(1, 3),
            hue: [340, 0, 330, 320, 290, 20][Math.floor(Math.random() * 6)], // sfumature romantiche
            angle: random(0, 2 * Math.PI),
            speed: random(1, 5),
            alpha: 1,
            decay: random(0.01, 0.02)
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter(p => p.alpha > 0);

    for (let p of particles) {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed + 1;
        p.alpha -= p.decay;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.alpha})`;
        ctx.fill();
    }

    requestAnimationFrame(animate);
}

// Avvia i fuochi all'ingresso nella pagina
window.addEventListener('DOMContentLoaded', () => {
    createFirework();
    setInterval(createFirework, 1500);
    animate();
});

// Solo mostra il video quando clicchi
function mostraVideo() {
    const container = document.getElementById('videoContainer');
    const video = document.getElementById('propostaVideo');
    container.style.display = 'block';
    video.play();
    video.requestFullscreen().catch(() => {}); // Non sempre funziona, ma ci prova
}

function lanciaCuori() {
    for (let i = 0; i < 30; i++) {
        const cuore = document.createElement('div');
        cuore.classList.add('heart-falling');
        cuore.innerText = '❤️';
        cuore.style.left = `${Math.random() * 100}vw`;
        cuore.style.fontSize = `${random(16, 32)}px`;
        document.body.appendChild(cuore);
        setTimeout(() => cuore.remove(), 5000);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createFirework();
    setInterval(createFirework, 1500);
    animate();
    lanciaCuori(); // lancio cuori iniziale
});


document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById('backgroundMusic');
    if (music) {
        music.volume = 0.2;
        music.play().catch((err) => {
            console.log("Autoplay bloccato dal browser: ", err);
        });
    }
});

