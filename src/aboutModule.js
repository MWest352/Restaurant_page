//About Module

function aboutSection() {
  const aboutSection = document.createElement('div');

  aboutSection.setAttribute('id', 'aboutSection');

  return aboutSection;
}
function aboutHeader() {
  const aboutHeader = document.createElement('div');

  aboutHeader.innerHTML = "About"
  aboutHeader.setAttribute('id', 'aboutHeader');

  return aboutHeader;
}

function aboutBody() {
  const aboutBody = document.createElement('div');

  aboutBody.textContent = 
  "Johnny's Sliders was founded in 2022. Modeled after an early diner, it was meant to have that classic burger joint drive-in feel. A simple menu keeps things quick and easy. Don't forget to check out the Sunday Car Shows!"
  aboutBody.setAttribute('id', 'aboutBody');

  return aboutBody;
}

export{
  aboutSection,
  aboutHeader,
  aboutBody
}