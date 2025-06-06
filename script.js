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


const questions = [
  "Kya tum ready ho thoda sa pyaar mehsoos karne ke liye?",
  "Kya tum mere saath hamesha rehna chahogi?",
  "Kya tum mujhe kabhi nahi bhoologi?",
  "Kya tum mujhe apna maanogi dil se?",
  "Last question — Kya tum iss pyare safar ke liye haan kahogi? 💍"
];

let currentQuestion = 0;

function nextPopup() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    document.getElementById("popupText").innerText = questions[currentQuestion];
  } else {
    document.getElementById("popupBox").style.display = "none";
    document.getElementById("mainContent").classList.remove("blurred");
  }
}

function rejectPopup() {
  document.getElementById("popupText").innerText = "Oye hoye... dil toot gaya 💔😭 Par koi na, ek din tum bhi manaogi 😎";
  document.getElementById("popupButtons").style.display = "none";
}

window.onload = function () {
  document.getElementById("mainContent").classList.add("blurred");
};




