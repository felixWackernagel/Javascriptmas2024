import { addresses } from "./addresses.js";
/*
Writing out labels by hand is a real pain. Luckily, you are so organised that you have all of your contacts saved in an array.

But not all of your contacts are on your Christmas list. So your task is this:

** Task ** 
1. Render a label for each entry in the address book, but only if isOnChistmasList is set to true! The label should contain the recipient's name and address.
2. Decorate the label with two festive icons from the icons folder. Use whatever colour scheme and layout you think looks good! 

** Stretch goals **
1. Ensure that the label does not get two of the same icon.
2. Create your own CSS Christmas logo to add a personal touch to each label.
*/

const icons = [
  "bauble",
  "bow",
  "candy-cane",
  "deer",
  "gifts",
  "gingerbread-man",
  "santa-hat",
  "santa",
  "snowflake",
  "snowglobe",
  "snowman",
  "star-bauble",
  "star",
  "stocking",
  "tree",
  "trees",
  "wreath",
];

let one = 0;
let two = icons.length - 1;

const labelsContainer = document.querySelector(".labels-container");

addresses
  .filter((address) => address.isOnChristmasList)
  .forEach((address) => {
    const icon1 = icons[one];
    const icon2 = icons[two];
    one++;
    two--;
    const item = document.createElement("div");
    item.classList.add("label");
    item.innerHTML = `<span class="name">${address.name}</span>${address["address line 1"]}<br>${address.town}<br>${address.state} / ${address.country}<img class="label__icon--one" src="icons/${icon1}.png"/><img class="label__icon--two" src="icons/${icon2}.png"/><span class="label__logo">SC</span>`;
    labelsContainer.appendChild(item);
  });
