import { toysRequested } from "./data.js";

/*
The run up to Christmas is quite a data-intensive time for Santa. In order to understand market trends, Santa's Data Elves have collated sample children’s wish list data from 4 locations and now need to know which was the most popular toy requested overall. This will help with procurement for next year. 

**Task**
- Your task is to find the most requested toy from the array of objects “toysRequested”. But remember: some toys appear in more than one location!

Expected output: "The most popular toy is 🎲 board games with 9000 requests.""

**Stretch Goal**
- Complete this challenge using the .flatMap() method to work with the various "toys" arrays.

*/

function groupByNameAndSum(map, toy) {
  let name = Object.keys(toy)[0];
  let sum = map.get(name);
  let quantity = toy[name];
  if (sum) {
    map.set(name, sum + quantity);
  } else {
    map.set(name, quantity);
  }
  return map;
}

const mapNameToSum = toysRequested
  .flatMap((data) => data.toys)
  .reduce(groupByNameAndSum, new Map());

const sortedBySumDesc = [...mapNameToSum.entries()].sort((a, b) => {
  let sumA = a[1];
  let sumB = b[1];
  if (sumA < sumB) return 1;
  if (sumA > sumB) return -1;
  return 0;
});

const bestToy = sortedBySumDesc[0];

console.log(
  `The most popular toy is ${bestToy[0]} with ${bestToy[1]} requests.`
);
