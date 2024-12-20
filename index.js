const elfFirstNames = [
  "Aurora", "Blitzen", "Crispin", "Dazzle", "Evergreen", "Frost", "Glimmer",
  "Holly", "Icicle", "Joyful", "Kringle", "Luna", "Merry", "Nutmeg",
  "Olwen", "Pine", "Quill", "Razzle", "Sparkle", "Tinsel", "Umbra",
  "Vixen", "Whisk", "Xylo", "Yule", "Zippy"
];

const elfLastNames = [
  "Applecheeks", "Bells", "Candycane", "Dazzlebright", "Everbright", "Frostwhisk",
  "Gingersnap", "Hollyberry", "Icestorm", "Jovial", "Kindleflame", "Lightwhisper",
  "Merrysprout", "Nutcracker", "Oakenleaf", "Peppermint", "Quicksilver", "Raindrop",
  "Snowdust", "Twinkletoes", "Underwood", "Velvet", "Winterberry", "Xylospark",
  "Yuletide", "Zestwind"
];

/*
 * 🎅 Task:
 * - Generate an elf first and last name that matches the user’s first and last name initials, then display it on the screen.
 * - Example: if the user’s name is "John Doe," the elf name could be "Joyful Dazzle."
 * - Display the generated elf names in the "Registered Employees" list.
 */

const generatedNames = [];
const list = document.querySelector( '#elf-names-list' );
const form = document.querySelector( '#form' );
const error = document.querySelector( '#error' );
const result = document.querySelector( '#elf-name-display' );
form.addEventListener( 'submit', event => {
  event.preventDefault();
  error.textContent = '';
  result.textContent = '';
  const formData = new FormData( form );
  const firstName = formData.get( 'first-name' );
  const lastName = formData.get( 'last-name' );
  const firstLetter = firstName.charAt( 0 ).toUpperCase();
  const lastLetter = lastName.charAt( 0 ).toUpperCase();
  const possibleFirstName = elfFirstNames.filter( name => name.startsWith( firstLetter ) );
  const possibleLastName = elfLastNames.filter( name => name.startsWith( lastLetter ) );

  if( possibleFirstName.length === 0 || possibleLastName.length === 0 ) {
    error.textContent = 'No name found for human initials!';
    return;
  }

  const name = `${possibleFirstName[0]} ${possibleLastName[0]}`;

  if( generatedNames.some( existingName => existingName === name ) ) {
    error.textContent = 'Name already exists!';
    return;
  }

  if( generatedNames.length === 0 ) {
    list.innerHTML = '';
  }
  generatedNames.push( name );
  result.textContent = name;

  const listElement = document.createElement( 'li' );
  listElement.textContent = name;
  list.append( listElement );

  form.reset();
} );

/*
 * 🌟 Stretch Goals:
 * - Generate the elf names using an LLM API (like HuggingFace). 
 * - Don't save the same name twice. (not necessary for the normal task)
 * - Make sure to use Scrimba's environment variables feature so you don't expose your API key 
 */ 
