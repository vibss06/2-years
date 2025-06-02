function showLove() {
  const response = document.getElementById("response");
  response.innerText = "I love so much My LOVE 💖💫";
}





  const bgMusic = document.getElementById('bgMusic');
  const musicControl = document.getElementById('musicControl');

  let isPlaying = false;

  musicControl.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      musicControl.textContent = '🎵';
    } else {
      bgMusic.play();
      musicControl.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
  });

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}




