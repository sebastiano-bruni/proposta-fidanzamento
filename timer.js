// Data di inizio conoscenza (anno, mese-1, giorno, ora, minuti)
const dataInizio = new Date(2024, 9, 8, 21, 0); // 8 ottobre 2024, 21:00

function aggiornaTimer() {
    const adesso = new Date();
    const diffMs = adesso - dataInizio;

    const diffGiorni = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffOre = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const diffMinuti = Math.floor((diffMs / (1000 * 60)) % 60);
    const diffSecondi = Math.floor((diffMs / 1000) % 60);

    const frase = `Ci conosciamo da ormai ${diffGiorni} giorni, ${diffOre} ore, ${diffMinuti} minuti e ${diffSecondi} secondi.`;
    document.getElementById("tempo-passato").innerText = frase;
}

// Avvia subito e aggiorna ogni secondo
aggiornaTimer();
setInterval(aggiornaTimer, 1000);