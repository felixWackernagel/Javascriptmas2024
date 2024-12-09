// Guest and her preferences
const guest = {
  name: "Alice",
  loves: ["avocado", "quinoa", "kale"],
  dislikes: [
    "pork",
    "chicken",
    "turkey",
    "beef",
    "dairy",
    "butter",
    "eggs",
    "gluten",
    "nuts",
    "soy",
    "flour",
  ],
};

// List of Christmas-themed recipes with their ingredients
const recipes = [
  {
    name: "Honey-Glazed Ham",
    ingredients: ["pork", "honey", "brown sugar", "cloves", "butter"],
  },
  {
    name: "Roast Turkey with Stuffing",
    ingredients: [
      "turkey",
      "bread crumbs",
      "gluten",
      "celery",
      "onions",
      "tomatoes",
      "butter",
    ],
  },
  {
    name: "Classic Beef Wellington",
    ingredients: ["beef", "mushrooms", "puff pastry", "eggs"],
  },
  {
    name: "Gingerbread Cookies",
    ingredients: ["flour", "molasses", "ginger", "cinnamon", "butter", "eggs"],
  },
  {
    name: "Vegan Stuffed Peppers",
    ingredients: [
      "bell peppers",
      "quinoa",
      "black beans",
      "corn",
      "tomato sauce",
      "kale",
    ],
  },
  {
    name: "Roasted Brussels Sprouts",
    ingredients: ["brussels sprouts", "olive oil", "garlic"],
  },
  {
    name: "Vegan Avocado Chocolate Mousse",
    ingredients: ["avocado", "cocoa powder", "maple syrup", "flour"],
  },
  {
    name: "Vegan Christmas Cookies",
    ingredients: ["oats", "maple syrup", "vanilla extract"],
  },
  {
    name: "Quinoa Salad",
    ingredients: ["kale", "quinoa", "cranberries", "lemon juice"],
  },
  {
    name: "Vegan Lentil Loaf",
    ingredients: ["lentils", "carrots", "celery", "onions", "tomato paste"],
  },
];

// Requirements for a suitable recipe
// 1: Contains at least one ingredient Alice likes
// 2: Contains zero ingredients that Alice dislikes

// Step 1: Filter recipes based on Alice's preferences

// get array with elements which are in both input arrays
function intersection(a1, a2) {
  return a1.filter((a) => a2.includes(a));
}

const possibleRecipes = recipes.filter(
  // find recipe with one or more loved ingredients
  (recipe) => intersection(guest.loves, recipe.ingredients).length > 0
);

const goodRecipes = possibleRecipes.filter(
  // find recipe without disliked ingredients
  (recipe) => intersection(guest.dislikes, recipe.ingredients).length == 0
);

// Step 2: Output the suitable recipes

const output = document.getElementById("output");

goodRecipes.forEach((recipe) => {
  const name = document.createElement("h2");
  name.textContent = recipe.name;
  output.append(name);

  const list = document.createElement("ul");
  output.append(list);

  recipe.ingredients.forEach((ingredient) => {
    const listElement = document.createElement("li");
    listElement.textContent = ingredient;
    list.append(listElement);
  });
});
