const input = document.querySelectorAll("input");
const profilLogo = document.querySelectorAll(".profil-logo");
const modal = document.querySelector(".modal-container");

const toggleModal = () => {
  modal.classList.toggle("active");
};

input.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      input.value = "";
      input.blur();
    }
  });
});

profilLogo.forEach((logo) => {
  logo.addEventListener("click", toggleModal);
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    toggleModal();
  }
});


function copyToClipboard() {
  const textToCopy = "YASSIN#2077";
  navigator.clipboard.writeText(textToCopy);
  const messageElement = document.querySelector(".message .m");
  messageElement.textContent = "Copied!";
  setTimeout(() => {
    messageElement.textContent = "Add on Discord!";
  }, 2000); // Set the text back to the original after 2 seconds
}



var typed3 = new Typed('.type', {
    strings: ['I am Yassin', 'syrian','a programmer', 'a minecraft enjoyer', '🤍👑'],
  typeSpeed: 20,
  showCursor: false,
  backSpeed: 20,
    smartBackspace: true,
    loop: true
});



audioClip.addEventListener('play', function() {
  slider.style.display = 'block';
});

audioClip.addEventListener('pause', function() {
  slider.style.display = 'none';
});

volumeSlider.addEventListener('input', function() { // Add this event listener
  audioClip.volume = volumeSlider.value;
});

document.addEventListener('keydown', function(e) {
  if (e.code === 'Space') {
    e.preventDefault();
    toggleAudio();
  }
});

audioClip.volume = 0.5;