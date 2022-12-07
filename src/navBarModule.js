//This is where Navigation items will  go

function navBar() {
  const navBar = document.createElement('div');

  navBar.setAttribute('id', 'navBar');

  return navBar;
}

function navItemMenu() {
  const navItemMenu = document.createElement('div');

  navItemMenu.setAttribute('id', 'navItemMenu');
  navItemMenu.innerHTML = "Menu";
  navItemMenu.classList.add('navItem');
  

  return navItemMenu;
}

function navItemAbout() {
  const navItemAbout = document.createElement('div');

  navItemAbout.setAttribute('id', 'navItemAbout');
  navItemAbout.innerHTML = "About";
  navItemAbout.classList.add('navItem');
  

  return navItemAbout;
}

function navItemContact() {
  const navItemContact = document.createElement('div');

  navItemContact.setAttribute('id', 'navItemContact');
  navItemContact.innerHTML = "Contact";
  navItemContact.classList.add('navItem');
  

  return navItemContact;
}


export{
  navBar,
  navItemMenu,
  navItemAbout,
  navItemContact

  }