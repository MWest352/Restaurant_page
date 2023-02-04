//Contact info

import { createDivElement } from './elementFactory';

const contactInfoMain = createDivElement('contactInfoMain', '');
const contactHeader = createDivElement('contactHeader', 'CONTACT INFO');
const address = createDivElement('address', '12345 12345th Ave BFE, Colorado 55555');
const phone = createDivElement('phone', '(248)-434-5508');

export { contactInfoMain, contactHeader, address, phone };