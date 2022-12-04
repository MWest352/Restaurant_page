import './style.css';

function content() {
  const mainElement = document.createElement('div');

  mainElement.innerHTML = "Content Container"
  mainElement.setAttribute('id', 'content')

  return mainElement;
}

document.body.appendChild(content());

function mainContainer() {
  const mainContainer = document.createElement('div');

  mainContainer.innerHTML = "mainContainer"
  mainContainer.setAttribute('id', 'mainContainer')

  return mainContainer;
}

document.body.appendChild(mainContainer());

function content() {
  const mainElement = document.createElement('div');

  mainElement.innerHTML = "Hello World"
  mainElement.setAttribute('id', 'content')

  return mainElement;
}

document.body.appendChild(content());
