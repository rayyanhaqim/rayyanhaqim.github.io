const texts = ["My Portfolio", "Student", "IT Enthusiast","Rayyan Haqim"];
let index = 0;

const glitchElement = document.querySelector("h2.hero.glitch.layers");
const spanElement = glitchElement.querySelector("span");

function updateGlitchText() {
  index = (index + 1) % texts.length;
  const nextText = texts[index];
  
  glitchElement.setAttribute("data-text", nextText);
  spanElement.textContent = nextText;
}

setInterval(updateGlitchText, 3000);

const root = document.getElementById('root');


  const btn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

function open(pg) {
  fetch(`templates/${pg}.html`)
    .then(resp => resp.text()) // ← panggil .text()
    .then(data => {
      root.innerHTML = data;
    })
    .catch(err => {
      console.error('Gagal memuat halaman:', err);
      root.innerHTML = "<p>Halaman tidak dapat dimuat.</p>";
    });
}
