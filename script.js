document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById('bg-music');
    const overlay = document.getElementById('overlay');
    const enterBtn = document.getElementById('enter-btn');
    const mainContent = document.querySelector('.box');
    const audioToggle = document.getElementById('audio-toggle');
    const icon = audioToggle.querySelector('i');

    music.volume = 0.5;

    // Klik "Enter" untuk mulai musik & tampilkan konten
    enterBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        mainContent.style.display = 'block';
        audioToggle.style.display = 'block';
        music.play().then(() => {
            music.muted = false;
        }).catch(err => console.log(err));
    });

    // Toggle audio
    audioToggle.addEventListener('click', () => {
        if (music.muted) {
            music.muted = false;
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
        } else {
            music.muted = true;
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
        }
    });
});
