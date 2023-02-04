//This contains the Title, and subtitle sections

import { createDivElement } from './elementFactory';

const header = createDivElement('header', '');
const title = createDivElement('title', "B. Goode's");
const subtitle = createDivElement('subtitle', 'est. 2022');

export { header, title, subtitle };