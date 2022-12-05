//This contains the Title, and subtitle sections


//HEADER
function header(title) {
  const header = document.createElement('div');

  header.innerHTML = "header";
  header.setAttribute('id', 'header');

  return header;
}

//TITLE
function title() {
  const title = document.createElement('div');

  title.innerHTML = "Johnny's Sliders";
  title.setAttribute('id', 'title');

  return title;

};

//SUBTITLE
function subtitle() {
  const subtitle = document.createElement('div');

  subtitle.innerHTML = "est.  2022";
  subtitle.setAttribute('id', 'subtitle');

  return subtitle;

};

export{
  header,
  title,
  subtitle
}