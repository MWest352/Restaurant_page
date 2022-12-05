//Contact info

//MAIN
function contactInfoMain() {
  const contactInfoMain = document.createElement('div');

  contactInfoMain.setAttribute('id', 'contactInfoMain');
  

  return contactInfoMain;
}

//HEADER
function contactHeader() {
  const contactHeader = document.createElement('div');

  contactHeader.setAttribute('id', 'contactHeader');
  contactHeader.innerHTML = "CONTACT INFO"

  return contactHeader;
}

//ADDRESS
function address() {
  const address = document.createElement('div');

  address.setAttribute('id', 'address');
  address.innerHTML = "12345 12345th Ave BFE, Colorado 55555"
  
  return address;
}

//PHONE
function phone() {
  const phone = document.createElement('div');

  phone.setAttribute('id', 'phone');
  phone.innerHTML = "(248)-434-5508"
  
  return phone;
}


export{
  contactInfoMain,
  contactHeader,
  address,
  phone
}