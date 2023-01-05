//This contains the Title, and subtitle sections
import Pink_Sled from './styling/images/Pink_Sled_BW2.jpg'

//HEADER
function header() {
  const header = document.createElement('div');

  header.setAttribute('id', 'header');

  return header;
}

//HEADER BACKGROUND
function headerBackground(){
  const headerBackground = new Image();
  headerBackground.src = Pink_Sled

  headerBackground.setAttribute('id', 'backgroundImage')

  return headerBackground;
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
  headerBackground,
  title,
  subtitle
}