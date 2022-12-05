//This is where Navigation items will  go

function navBar() {
  const navBar = document.createElement('div');

  navBar.setAttribute('id', 'navBar');

  return navBar;
}

function navItemMenu() {
  const navItemMenu = document.createElement('div');

  navItemMenu.innerHTML = "Menu";
  navItemMenu.classList.add('navItem');
  navItemMenu.setAttribute('id', 'navItemMenu');

  return navItemMenu;
}

function navItemAbout() {
  const navItemAbout = document.createElement('div');

  navItemAbout.innerHTML = "About";
  navItemAbout.classList.add('navItem');
  navItemAbout.setAttribute('id', 'navItemAbout');

  return navItemAbout;
}

function navItemContact() {
  const navItemContact = document.createElement('div');

  navItemContact.innerHTML = "Contact";
  navItemContact.classList.add('navItem');
  navItemContact.setAttribute('id', 'navItemContact');

  return navItemContact;
}


export{
  navBar,
  navItemMenu,
  navItemAbout,
  navItemContact

  }