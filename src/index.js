import './style.css';
import { header } from './headerModule';
import { title } from './headerModule';
import {subtitle} from './headerModule';
import { navBar } from './navBarModule';
import { navItemAbout } from './navBarModule';
import { navItemContact } from './navBarModule';
import { navItemMenu } from './navBarModule';


function mainContainer() {
  const mainContainer = document.createElement('div');

  mainContainer.setAttribute('id', 'mainContainer')

  return mainContainer;
}

document.getElementById('content').append(mainContainer());

//APPEND HEADER SECTION
document.getElementById('mainContainer').append(header());
document.getElementById('header').append(title());
document.getElementById('header').append(subtitle());

//APPEND NAVIGATION SECTION
document.getElementById('mainContainer').append(navBar());
document.getElementById('navBar').append(navItemMenu());
document.getElementById('navBar').append(navItemContact());
document.getElementById('navBar').append(navItemAbout());
