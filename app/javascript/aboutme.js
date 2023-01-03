
const paulimg = document.querySelector('.founder-img');
const bubble = document.querySelector('.speech-bubble')
const bubbletxt = document.querySelector('.speech-bubble-txt')
const anger = document.querySelector('.anger')
const animeface = document.querySelector('.animeface')
let timeoutId = null;

function mouseOver() {
  bubble.style.display = "";
  bubbletxt.style.display = "";
  anger.style.display = "";
  animeface.style.display = "";
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
}
function mouseOut(evt) {
  timeoutId = setTimeout(() => {
    bubble.style.display = 'none';
    bubbletxt.style.display = 'none';
    anger.style.display = 'none';
    animeface.style.display = 'none';
    timeoutId = null;
  }, 400);
}
paulimg.addEventListener('mouseover', mouseOver);
paulimg.addEventListener('mouseout', mouseOut);
