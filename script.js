// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------------------------------------------------------
// Signature element: typed "build log" ticker in the hero.
// EDIT: change these lines to your own quick facts.
// ---------------------------------------------------------------
const LINES = [
  "whoami          mohammad-ebrahim-darabi",
  "role            ai engineer / generative ai engineer",
  "status          building agents @ houshyar 24",
  "stack           python \u00b7 pytorch \u00b7 langchain \u00b7 rag",
  "background      b.sc. mechanical engineering"
];

const el = document.getElementById('ticker-text');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function tick(){
  const current = LINES[lineIndex];

  if(!deleting){
    charIndex++;
    el.textContent = current.slice(0, charIndex);
    if(charIndex === current.length){
      deleting = true;
      setTimeout(tick, 1800);
      return;
    }
  } else {
    charIndex--;
    el.textContent = current.slice(0, charIndex);
    if(charIndex === 0){
      deleting = false;
      lineIndex = (lineIndex + 1) % LINES.length;
    }
  }

  setTimeout(tick, deleting ? 22 : 38);
}

if(prefersReducedMotion){
  el.textContent = LINES[0];
} else {
  tick();
}

// ---------------------------------------------------------------
// Active tab highlight on scroll
// ---------------------------------------------------------------
const sections = document.querySelectorAll('main section');
const tabs = document.querySelectorAll('.tab');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const id = entry.target.id;
      tabs.forEach(t => t.classList.remove('is-active'));
      const active = document.querySelector(`.tab[href="#${id}"]`);
      if(active) active.classList.add('is-active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(s => observer.observe(s));
