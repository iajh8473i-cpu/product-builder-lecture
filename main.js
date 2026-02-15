const drawButton = document.getElementById('draw-button');
const result = document.getElementById('result');
const themeToggleButton = document.getElementById('theme-toggle');
const THEME_KEY = 'lotto_theme';

function applyTheme(theme) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', nextTheme);
  themeToggleButton.textContent = nextTheme === 'dark' ? '화이트모드' : '다크모드';
}

function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const defaultTheme = savedTheme || 'light';
  applyTheme(defaultTheme);
}

function drawLottoNumbers() {
  const picked = new Set();

  while (picked.size < 6) {
    const number = Math.floor(Math.random() * 45) + 1;
    picked.add(number);
  }

  return [...picked].sort((a, b) => a - b);
}

drawButton.addEventListener('click', () => {
  const numbers = drawLottoNumbers();
  result.textContent = numbers.join(' ');
});

themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme') || 'light';
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem(THEME_KEY, nextTheme);
  applyTheme(nextTheme);
});

initializeTheme();
