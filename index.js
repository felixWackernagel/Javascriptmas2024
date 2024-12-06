/* 
This Christmas, you’ve been tasked with running an anagram quiz at 
the family gathering.

You have been given a list of anagrams, but you suspect that some 
of the anagram pairs might be incorrect.

Your job is to write a JavaScript function to loop through the array
and filter out any pairs that aren’t actually anagrams.

For this challenge, spaces will be ignored, so "Be The Helm" would 
be considered a valid anagram of "Bethlehem".
*/ 

let anagrams = [
    ["Can Assault", "Santa Claus"],
    ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
    ["Frosty The Snowman", "Honesty Warms Front"],
    ["Drastic Charms", "Christmas Cards"],
    ["Congress Liar", "Carol Singers"],
    ["The Tin Glints", "Silent Night"],
    ["Be The Helm", "Betlehem"],
    ["Is Car Thieves", "Christmas Eve"],
    null,
    undefined,
    [],
    ["to less as example"],
    ["good luck", "logo duck"],
];

function isAnagram( array ) {
    // skip invalid input data (array, min length of 2)
    if( !array || array.length < 2 ) {
        return false;
    }

    // remove spaces and make everything to lower-case
    // i.e. "Is Car Thieves" => "iscarthieves"
    const normalized = array.map( phrase => phrase.trim().replace( / /g, '' ).toLowerCase() );

    // skip candidates with different length
    const requiredLength = normalized[0].length;
    if( !normalized.every( phrase => phrase.length === requiredLength ) ) {
        return false;
    }

    // order each candidate alphanumeric
    // "iscarthieves" => "aceehiirsstv"
    const ordered = normalized.map( word => word.split( '' ).sort().join('') );

    // it is an anagram when all candidates are equal
    const reference = ordered.pop();
    return ordered.every( word => word === reference );
}

function findAnagrams(array){
    return array.filter( isAnagram );
}

console.log( 'This are anagrams:', findAnagrams( anagrams ) );