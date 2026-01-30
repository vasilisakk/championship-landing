const element = document.querySelector('.hero__typing');
const text = '</h1>';

let index = 0;
let isDeleting = false;

const typingSpeed = 120;
const deletingSpeed = 80;
const pauseAfterTyping = 1200;
const pauseAfterDeleting = 600;

function typeLoop() {
  if (!isDeleting) {
    element.textContent = text.slice(0, index + 1);
    index++;

    if (index === text.length) {
      setTimeout(() => (isDeleting = true), pauseAfterTyping);
    }
  } else {
    element.textContent = text.slice(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
      setTimeout(() => {}, pauseAfterDeleting);
    }
  }

  const delay = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeLoop, delay);
}

typeLoop();
