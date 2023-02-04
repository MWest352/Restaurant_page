//IMPORT SECTION

//Import Styling
import './styling/style.css';

//Import Header
import { header, title, subtitle } from './headerModule';

//Import Navbar
import { navBar, navItemMenu, navItemAbout, navItemContact } from './navBarModule';

//Import About
import { aboutSection, aboutHeader, aboutBody } from './aboutModule';

//Import Menu
import {  foodMenuMain,
          foodMenuHeader,
          slider,
          sliderDescription,
          sliderWit,
          sliderWitDescription,
          fries,
          friesDescription,
          friesWit,
          friesWitDescription,
          drinksHeader,
          cokeProducts,
          milkshakesHeader,
          milkshakeFlavors } from './menuModule';

//Import Contact Info
import { contactInfoMain, contactHeader, address, phone } from './contactInfoModule';


//MAIN CONTAINER
function mainContainer() {
  const mainContainer = document.createElement('div');

  mainContainer.setAttribute('id', 'mainContainer')

  return mainContainer;
}

function displayContainer() {
  const displayContainer = document.createElement('div');

  displayContainer.setAttribute('id', 'displayContainer')

  return displayContainer;
}


document.getElementById('content').append(mainContainer());


//APPEND HEADER SECTION
document.getElementById('mainContainer').append(header);
document.getElementById('header').append(title);
document.getElementById('header').append(subtitle);

//APPEND NAVIGATION SECTION
document.getElementById('mainContainer').append(navBar);
document.getElementById('navBar').append(navItemMenu);
document.getElementById('navBar').append(navItemContact);
document.getElementById('navBar').append(navItemAbout);

//DISPLAY CONTAINER
document.getElementById('mainContainer').append(displayContainer());

//NAVIGATION LOGIC

document.getElementById('navItemAbout').addEventListener('click', appendAbout)
document.getElementById('navItemMenu').addEventListener('click', appendMenu)
document.getElementById('navItemContact').addEventListener('click', appendContact)
navItemMenu.onclick=appendMenu;
// navItemContact.onclick=appendContact();

function clearDisplay(){
  document.getElementById('displayContainer').innerHTML = ""
}

//APPEND ABOUT SECTION
function appendAbout(){
  clearDisplay();
  console.log("about clicked")
  document.getElementById('displayContainer').append(aboutSection);
  document.getElementById('aboutSection').append(aboutHeader);
  document.getElementById('aboutSection').append(aboutBody);
}

//APPEND MENU
function appendMenu(){
  clearDisplay();
  console.log("Menu clicked")
  document.getElementById('displayContainer').append(foodMenuMain);
  document.getElementById('foodMenuMain').append(foodMenuHeader);
  document.getElementById('foodMenuMain').append(slider);
  document.getElementById('slider').append(sliderDescription);
  document.getElementById('foodMenuMain').append(sliderWit);
  document.getElementById('sliderWit').append(sliderWitDescription);
  document.getElementById('foodMenuMain').append(fries);
  document.getElementById('fries').append(friesDescription);
  document.getElementById('foodMenuMain').append(friesWit);
  document.getElementById('friesWit').append(friesWitDescription);
  document.getElementById('foodMenuMain').append(drinksHeader);
  document.getElementById('foodMenuMain').append(cokeProducts);
  document.getElementById('foodMenuMain').append(milkshakesHeader);
  document.getElementById('milkshakesHeader').append(milkshakeFlavors);
};


 //APPEND CONTACT INFO

function appendContact(){
  clearDisplay();
  document.getElementById('displayContainer').append(contactInfoMain);
  document.getElementById('contactInfoMain').append(contactHeader);
  document.getElementById('contactInfoMain').append(address);
  document.getElementById('contactInfoMain').append(phone);
}
