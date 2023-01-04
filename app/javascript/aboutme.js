
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

const foundertxt = document.querySelector('.founder-txt')
function change(elem){
    if (elem.innerText=="Commited programmer with a passion for tech and a heart for AI.") elem.innerText = "Loving father of some little code and AI generated short stories.";
    else elem.innerText = "Commited programmer with a passion for tech and a heart for AI.";
}
paulimg.addEventListener('click', (evt) => {
  change(foundertxt)
})
function change2(elem){
  if (elem.innerText=="Commited programmer with a passion for tech and a heart for AI.") elem.innerText = "Also world wide known for his legendary quote 'Ich bin ein Berliner'.";
  else if (elem.innerText=="Loving father of some little code and AI generated short stories.") elem.innerText = "If I fiddle around too much with Javascript? Probably..";
  else if (elem.innerText=="Also world wide known for his legendary quote 'Ich bin ein Berliner'.") elem.innerText = "If I fiddle around too much with Javascript? Probably..";
  else if (elem.innerText=="If I fiddle around too much with Javascript? Probably..") elem.innerText = "Commited programmer with a passion for tech and a heart for AI.";
}
foundertxt.addEventListener('click', (evt) => {
  change2(foundertxt)
})
