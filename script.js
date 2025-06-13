const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

// Imposta stile canvas
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;
canvas.style.pointerEvents = 'none';

// Adatta il canvas allo schermo
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
            color: `hsl(${Math.floor(random(0, 360))}, 100%, 60%)`,
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

    particles = particles.filter(p => p.alpha > 0); // Rimuove quelle invisibili

    for (let p of particles) {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed + 1;
        p.alpha -= p.decay;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.color.match(/\d+/g)[0]}, 100%, 60%, ${p.alpha})`;
        ctx.fill();
    }

    requestAnimationFrame(animate);
}

// Funzione richiamata dal bottone "Cliccami"
function mostraVideo() {
    document.getElementById('videoContainer').style.display = 'block';
    document.getElementById('propostaVideo').play();

    // Avvia fuochi d’artificio
    createFirework();
    setInterval(createFirework, 1500);
    animate();
}