particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60, "density": { "enable": true, "value_area": 800 }},
    "color": { "value": "#000000" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

let textArray = ["Web Development.", "Frontend Development.", "Backend Development", "Web Designing."];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 90;
let deletingSpeed = 50;
let delayBetweenWords = 400; // Delay after each word is displayed

let textElement = document.getElementById("text");

function typeWriter() {
  if (charIndex < textArray[textIndex].length) {
    textElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(deleteWriter, delayBetweenWords);
  }
}

function deleteWriter() {
  if (charIndex > 0) {
    textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteWriter, deletingSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeWriter, delayBetweenWords);
  }
}

// Initialize the animation
typeWriter();