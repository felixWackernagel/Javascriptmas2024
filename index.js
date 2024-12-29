/*
Grandpa has a Christmas wish list to keep track of all the gifts he wants to ask for. But there’s a problem: if he forgets he’s already added something, the list gets clogged up with duplicates. This happened last year, and he ended up with 8 talking picture frames on Christmas Day!

Your task is to complete the `checkDuplicate()` function 👇 to ensure no duplicates are added to the list. But here’s the tricky part: Grandpa sometimes hits the spacebar more than once, making it harder to spot duplicates.

For example, only one of these entries should be added to the list — the others should be flagged as duplicates:

- "talking picture frames"
- "talking  picture frames"
- "talking picture    frames"
- " talking picture frames "

**Your tasks:**
1. Ensure no duplicates can be added to the list.
2. Account for extra spaces at the beginning/end and between words.
 
**Stretch Goals:**
1. Case Sensitivity: Handle cases where capitalization differs. For example:
   - `"Cat Hammock"` should be flagged as a duplicate of `"cat hammock"`.
   - Preserve Grandpa’s original capitalization (e.g., if `"Cat Hammock"` is added first, that should be added to the list). Do not simply convert all entries to lower case - Grandpa might well want to capitalize some words. 

2. Additional Features: Add functionality to delete or edit items on the list.
*/

// Get references to DOM elements
const itemInput = document.getElementById("item-input");
const addItemButton = document.getElementById("add-item-button");
const shoppingList = document.getElementById("shopping-list");
const stopEditButton = document.getElementById("stop-edit-button");
const listArr = [];
const MULTIPLE_SPACES = /\s{2,}/g;

function sanitize(text) {
  return text.trim().toLowerCase().replaceAll(MULTIPLE_SPACES, " ");
}

// Function to check item is not duplicate
function checkDuplicate() {
  /* ⚠️ You need to add code to this function! ⚠️*/

  const isEditMode = document.body.classList.contains("edit-mode");
  const itemText = itemInput.value;

  if (itemText === null || itemText.trim().length === 0) {
    if (isEditMode) {
      stopEditing();
      alert("Empty input is not allowed.");
    } else {
      itemInput.value = "";
    }
    return;
  }

  if (listArr.map(sanitize).includes(sanitize(itemText))) {
    if (isEditMode) {
      stopEditing();
      alert("Duplicate input is not allowed.");
    } else {
      itemInput.value = "";
    }
    return;
  }

  let text = itemText.trim().replaceAll(MULTIPLE_SPACES, " ");
  if (isEditMode) {
    let origin = itemInput.dataset.edit;
    let index = listArr.indexOf(origin);
    listArr[index] = text;
    stopEditing();
  } else {
    listArr.push(text);
  }
  renderList();
}

function removeItem(item) {
  listArr.splice(listArr.indexOf(item), 1);
  renderList();
}

function stopEditing() {
  itemInput.value = itemInput.dataset.before;
  itemInput.removeAttribute("data-before");
  itemInput.removeAttribute("data-edit");
  document.body.classList.remove("edit-mode");
}

function editItem(item) {
  itemInput.dataset.edit = item;
  itemInput.dataset.before = itemInput.value;
  itemInput.value = item;
  document.body.classList.add("edit-mode");
}

// Function to add an item to the shopping list
function renderList() {
  shoppingList.innerHTML = "";
  listArr.forEach((gift) => {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.onclick = () => removeItem(gift);

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.onclick = () => editItem(gift);

    const container = document.createElement("div");
    container.textContent = gift;
    container.appendChild(editBtn);
    container.appendChild(deleteBtn);

    const listItem = document.createElement("li");
    listItem.appendChild(container);

    shoppingList.appendChild(listItem);
  });
  itemInput.value = ""; // Clear the input field
}

// Add event listener to button
addItemButton.addEventListener("click", checkDuplicate);

stopEditButton.addEventListener("click", stopEditing);

// Allow adding items by pressing Enter key
itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkDuplicate();
  }
});
