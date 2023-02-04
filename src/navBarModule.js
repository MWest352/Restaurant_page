//Nav Bar

//Import
import { createDivElement } from "./elementFactory";
import { createDivElementWithClass } from "./elementFactory";

//Nav Bar Div creation
const navBar = createDivElement('navBar', '')
const navItemMenu = createDivElementWithClass('navItemMenu', 'Menu', 'navItem')
const navItemAbout = createDivElementWithClass('navItemAbout', 'About', 'navItem')
const navItemContact = createDivElementWithClass('navItemContact', 'Contact', 'navItem')

//Export
export{
  navBar,
  navItemMenu,
  navItemAbout,
  navItemContact
  }