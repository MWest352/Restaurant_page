//About Module

import { createDivElement } from './elementFactory';

const aboutSection = createDivElement('aboutSection', '');
const aboutHeader = createDivElement('aboutHeader', 'About');
const aboutBody = createDivElement('aboutBody', "B. Goode's was founded in 2022. Modeled after an early diner, it was meant to have that classic burger joint drive-in feel. A simple menu keeps things quick and easy. Don't forget to check out the Sunday Car Shows!");

export { aboutSection, aboutHeader, aboutBody };