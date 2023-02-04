//Menu Items

//Import
import { createDivElement } from "./elementFactory";
import { createDivElementWithClass } from "./elementFactory";

//Main Menu Container and Items
//Header
const foodMenuMain = createDivElement('foodMenuMain', '')
const foodMenuHeader = createDivElement('foodMenuHeader', '')

//Sliders and Slider -Wit
const slider = createDivElementWithClass('slider', 'Slider', 'foodMenuItem')
const sliderDescription = createDivElement('sliderDescription', "Plain slider served on a toasted bun.")
const sliderWit = createDivElementWithClass('sliderWit', 'Slider-Wit', 'foodMenuItem');
const sliderWitDescription = createDivElement('sliderWitDescription', "Slider with melted Provalone served on a toasted bun.");

//Fries and Fries -Wit
const fries = createDivElementWithClass('fries', 'Fries', 'foodMenuItem');
const friesDescription = createDivElement('friesDescription', "Hand cut tater's with Top Secret seasonings!");
const friesWit = createDivElementWithClass('friesWit', 'Fries-Wit', 'foodMenuItem')
const friesWitDescription = createDivElement('friesWitDescription', "Hand cut tater's with Top Secret seasonings, and melted Provalone on top!");

//Drinks
const drinksHeader = createDivElement('drinksHeader', "Drinks");
const cokeProducts = createDivElementWithClass('cokeProducts', "Coke, Sprite, Barq's Root Beer, Dr. Pepper, Soda Water, Sweet Tea, Unsweet Tea, Water", 'foodMenuItem' );
const milkshakesHeader = createDivElementWithClass('milkshakesHeader', 'Milkshakes', 'foodMenuItem');
const milkshakeFlavors = createDivElement('milkshakeFlavors', "Chocolate, Vanilla, Strawberry"); 

//Export
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