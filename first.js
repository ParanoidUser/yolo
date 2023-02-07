let div = document.createElement('div');
let img = document.createElement('img');
div.appendChild(img);

document.body.appendChild(div);

img.setAttribute('src', 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true')
img.style.width = '300px';
img.style.height = '300px';

let divButton = document.createElement('div');
let createButton = document.createElement('button');
createButton.textContent = 'light lamp'

divButton.appendChild(createButton)

document.body.appendChild(divButton)

let lightLamp = false

function offLamp() {
  if (lightLamp) {
    createButton.textContent = 'delete lamp'
  } else {
    createButton.textContent = 'light lamp'
  }
}
function onLamp() {
  lightLamp = !lightLamp

  if (lightLamp) {
    img.removeAttribute('src');
    img.setAttribute('src', 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true')
  } else {
    img.removeAttribute('src');
    img.setAttribute('src', 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true')
  }

  offLamp()
}

divButton.addEventListener('click', onLamp)

console.log(createButton)