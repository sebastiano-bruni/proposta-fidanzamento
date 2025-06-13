function showSurprise() {
    document.getElementById('surprise').classList.remove('hidden');
}

function mostraVideo() {
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('propostaVideo');

    videoContainer.style.display = 'block';
    video.play();
}