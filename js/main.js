const toggle = document.querySelector('#whoami-toggle');
const paragraph = document.querySelector('.whoami');

let display = false;

toggle.addEventListener('click', whoAmIText);

function whoAmIText() {
  display = !display;
  const show = display ? 'block' : 'none';
  paragraph.style.display = show;
}