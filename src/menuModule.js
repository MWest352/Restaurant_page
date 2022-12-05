//Menu Items

//Main Menu Container
function foodMenuMain() {
  const foodMenuMain = document.createElement('div');
  foodMenuMain.setAttribute('id', 'foodMenuMain');

  return foodMenuMain;
}

//HEADER
function foodMenuHeader() {
  const foodMenuHeader = document.createElement('div');

  foodMenuHeader.setAttribute('id', 'foodMenuHeader');
  foodMenuHeader.innerHTML = "Menu";

  return foodMenuHeader;
}

//SLIDER
function slider() {
  const slider = document.createElement('div');

  slider.setAttribute('id', 'slider');
  slider.classList.add('foodMenuItem');
  slider.innerHTML = "Slider"

  return slider;
}

//SLIDER DESCRIPTION
function sliderDescription() {
  const sliderDescription = document.createElement('div');

  sliderDescription.setAttribute('id', 'sliderDescription');
  sliderDescription.innerHTML = "Plain slider served on a toasted bun."

  return sliderDescription;
}

//SLIDER WIT
function sliderWit() {
  const sliderWit = document.createElement('div');

  sliderWit.setAttribute('id', 'sliderWit');
  sliderWit.classList.add('foodMenuItem');
  sliderWit.innerHTML = "Slider-Wit"

  return sliderWit;
}

//SLIDER WIT DESCRIPTION
function sliderWitDescription() {
  const sliderWitDescription = document.createElement('div');

  sliderWitDescription.setAttribute('id', 'sliderWitDescription');
  sliderWitDescription.innerHTML = "Slider with melted Cheddar Cheese served on a toasted bun."

  return sliderWitDescription;
}

//FRIES
function fries() {
  const fries = document.createElement('div');

  fries.setAttribute('id', 'fries');
  fries.classList.add('foodMenuItem');
  fries.innerHTML = "Fries"

  return fries;
}

//FRIES DESCRIPTION
function friesDescription() {
  const friesDescription = document.createElement('div');

  friesDescription.setAttribute('id', 'friesDescription');
  friesDescription.innerHTML = "Hand cut tater's with Top Secret seasonings!"

  return friesDescription;
}

//FRIES WIT
function friesWit() {
  const friesWit = document.createElement('div');

  friesWit.setAttribute('id', 'friesWit');
  friesWit.classList.add('foodMenuItem');
  friesWit.innerHTML = "FriesWit"

  return friesWit;
}

//FRIES WIT DESCRIPTION
function friesWitDescription() {
  const friesWitDescription = document.createElement('div');

  friesWitDescription.setAttribute('id', 'friesWitDescription');
  friesWitDescription.innerHTML = "Hand cut tater's with Top Secret seasonings, and melted Cheddar Cheese on top!"

  return friesWitDescription;
}

//DRINKS
function drinksHeader() {
  const drinksHeader = document.createElement('div');

  drinksHeader.setAttribute('id', 'drinksHeader');
  drinksHeader.innerHTML = "Drinks";

  return drinksHeader;
}

function cokeProducts() {
  const cokeProducts = document.createElement('div');

  cokeProducts.setAttribute('id', 'cokeProducts');
  cokeProducts.classList.add('foodMenuItem');
  cokeProducts.innerHTML = "Coke, Sprite, Barq's Root Beer, Dr. Pepper, Soda Water, Sweet Tea, Unsweet Tea, Water";

  return cokeProducts;
}

function milkshakesHeader() {
  const milkshakesHeader = document.createElement('div');

  milkshakesHeader.setAttribute('id', 'milkshakesHeader');
  milkshakesHeader.classList.add('foodMenuItem');
  milkshakesHeader.innerHTML = "Milkshakes";

  return milkshakesHeader;
}

function milkshakeFlavors() {
  const milkshakeFlavors = document.createElement('div');

  milkshakeFlavors.setAttribute('id', 'milkshakeFlavors');
  milkshakeFlavors.innerHTML = "Chocolate, Vanilla, Strawberry";

  return milkshakeFlavors;
}


export{
  foodMenuMain,
  foodMenuHeader,
  slider,
  sliderDescription,
  sliderWit,
  sliderWitDescription,
  fries,
  friesDescription,
  friesWit,
  friesWitDescription,
  drinksHeader,
  cokeProducts,
  milkshakesHeader,
  milkshakeFlavors
}