import './style.css';
import { header } from './headerModule';
import { title } from './headerModule';
import {subtitle} from './headerModule';


function mainContainer() {
  const mainContainer = document.createElement('div');

  mainContainer.innerHTML = "mainContainer"
  mainContainer.setAttribute('id', 'mainContainer')

  return mainContainer;
}

document.getElementById('content').append(mainContainer());


document.getElementById('mainContainer').append(header());
document.getElementById('header').append(title())
document.getElementById('title').append(subtitle())