import './style.css';


function mainContainer() {
  const mainContainer = document.createElement('div');

  mainContainer.innerHTML = "mainContainer"
  mainContainer.setAttribute('id', 'mainContainer')

  return mainContainer;
}

document.getElementById('content').appendChild(mainContainer());


