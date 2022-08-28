// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//  let anagrams1 = ('rail safety', 'fairy tales') 
//  let anagrams2 = ('RAIL! SAFETY!', 'fairy tales') 
//  let anagrams3 = ('Hi there', 'Bye there') 


function isAnagram(str1, str2) {

    let results = {};

    if (str1.length !== str2.length){
        return false;
    } else {
        for (let char of str1) {
            results[char] ? (results[char] += 1) : (results[char] = 1);
        }

        for (let char of str2) {
            results[char] ? (results[char] -= 1) : false;
        }

        for (let first in results) {
            if (results[first] !== 0) {
                return false;
            }
        }

    }
    return true;

    

}
console.log(isAnagram('rail safety', 'fairy tales'));
console.log(isAnagram('RAIL! SAFETY!', 'fairy tales'));
console.log(isAnagram('Hi there', 'Bye there'));