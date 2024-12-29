/*  Santas Emoji Hack!

During Christmas, Santa wants to ban negative emojis, so when people
use negative emoji shortcodes, he wants positive emojis to appear instead.

In other words, :angry: should result in 🎁 instead of 😠.


*/

const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

const badEmojis = {
  "😠": "🎁",
  "👎": "👏",
  "🤦‍♂️": "🎅",
  "😭": "😄",
  "🤮": "🤩",
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, check if it exists in the hackedEmojis object, 
and replace it with the corresponding emoji. If not, return the original word.


Example input: ":cry:"
Example output: ‍😄

*/
function emojifyWord(word) {
  if (word === null || word === undefined || word.length === 0) {
    return word;
  } else if (word.startsWith(":") && word.endsWith(":")) {
    let emoji = word.substring(1, word.length - 1);
    let keys = Object.keys(hackedEmojis);
    if (keys.includes(emoji)) {
      return hackedEmojis[emoji];
    }
  } else if (Object.keys(badEmojis).includes(word)) {
    return badEmojis[word];
  }
  return word;
}

console.log(emojifyWord(":angry:"));

/* 2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!

Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"
*/

function emojifyPhrase(phrase) {
  if (phrase === null || phrase === undefined || phrase.trim().length === 0) {
    return phrase;
  }
  return phrase.split(" ").map(emojifyWord).join(" ");
}

console.log(emojifyPhrase("Just read your article :thumbsdown:"));
console.log(emojifyPhrase("Just read your article 👏"));
console.log(emojifyPhrase("Those shoes :puke:"));

// Stretch goal: don't just replace the shortcodes, but also
// any emojis are added directly to the text.

console.log(emojifyPhrase(null));
console.log(emojifyPhrase(undefined));
console.log(emojifyPhrase(""));
console.log(emojifyPhrase("Those shoes 🤮"));
console.log(emojifyPhrase("Those shoes 🤮 and :man_facepalming:"));
