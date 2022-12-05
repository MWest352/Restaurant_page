import './style.css';
//IMPORT HEADER
import { header } from './headerModule';
import { title } from './headerModule';
import {subtitle} from './headerModule';
//IMPORT NAVBAR
import { navBar } from './navBarModule';
import { navItemAbout } from './navBarModule';
import { navItemContact } from './navBarModule';
import { navItemMenu } from './navBarModule';
//IMPORT ABOUT
import { aboutSection } from './aboutModule';
import { aboutHeader } from './aboutModule';
import { aboutBody } from './aboutModule';

//IMPORT MENU
import { foodMenuMain } from './menuModule';
import { foodMenuHeader } from './menuModule';
import { slider } from './menuModule';
import { sliderDescription} from './menuModule';
import { sliderWit } from './menuModule';
import {sliderWitDescription} from './menuModule';
import { fries } from './menuModule';
import { friesDescription } from './menuModule'
import { friesWit } from './menuModule';
import { friesWitDescription } from './menuModule';
import { drinksHeader } from './menuModule';
import { cokeProducts } from './menuModule';
import { milkshakesHeader } from './menuModule'
import { milkshakeFlavors } from './menuModule';

//IMPORT CONTACT INFO
import { contactInfoMain } from './contactInfoModule';
import { contactHeader } from './contactInfoModule';
import { address } from './contactInfoModule';
import { phone } from './contactInfoModule';


//MAIN CONTAINER
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


//APPEND ABOUT SECTION
document.getElementById('mainContainer').append(aboutSection());
document.getElementById('aboutSection').append(aboutHeader());
document.getElementById('aboutSection').append(aboutBody());


//APPEND MENU
document.getElementById('mainContainer').append(foodMenuMain());
document.getElementById('foodMenuMain').append(foodMenuHeader());
document.getElementById('foodMenuMain').append(slider());
document.getElementById('slider').append(sliderDescription());
document.getElementById('foodMenuMain').append(sliderWit());
document.getElementById('sliderWit').append(sliderWitDescription());
document.getElementById('foodMenuMain').append(fries());
document.getElementById('fries').append(friesDescription());
document.getElementById('foodMenuMain').append(friesWit());
document.getElementById('friesWit').append(friesWitDescription());
document.getElementById('foodMenuMain').append(drinksHeader());
document.getElementById('foodMenuMain').append(cokeProducts());
document.getElementById('foodMenuMain').append(milkshakesHeader());
document.getElementById('milkshakesHeader').append(milkshakeFlavors());

//APPEND CONTACT INFO
document.getElementById('mainContainer').append(contactInfoMain());
document.getElementById('contactInfoMain').append(contactHeader())
document.getElementById('contactInfoMain').append(address());
document.getElementById('contactInfoMain').append(phone());
