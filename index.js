import { codedMessage } from "./codedMessage.js";

/*
codedMessage.js holds a coded message (well, the name makes it obvious, huh?).

**Task**
- Decode the message!

key.md will help!

**Stretch Goal**
No stretch goal for the final day. Just stretch your legs!
*/

const HINT = 10;
const codedMessageEl = document.getElementById("codedMessage");
const encodedMessageEl = document.getElementById("encodedMessage");
const decodedMessageEl = document.getElementById("decodedMessage");

function binaryToDecimal(asciiBinaryCode) {
  return parseInt(asciiBinaryCode, 2);
}

function decimalToCharacter(asciiDecimalCode) {
  return String.fromCharCode(asciiDecimalCode);
}

function decode(asciiDecimalCode) {
  let decimal = asciiDecimalCode - HINT;
  if (decimal <= 31) {
    decimal = 127 - (31 - decimal);
  }
  return decimal;
}

codedMessageEl.textContent = codedMessage.join(" ");

encodedMessageEl.textContent = codedMessage
  .map(binaryToDecimal)
  .map(decimalToCharacter)
  .join("");

decodedMessageEl.textContent = codedMessage
  .map(binaryToDecimal)
  .map(decode)
  .map(decimalToCharacter)
  .join("");
