// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops

// Bonus 2
let phraseToCheck = "No 'x' in Nixon" 

let spacelessPhrase = ''
let isPalindrome = false;
for(let i = 0; i < phraseToCheck.length; i ++) {
  if(phraseToCheck[i] !== " " && phraseToCheck[i] !== "," && phraseToCheck[i] !== "?" && phraseToCheck[i] !== "!" && phraseToCheck[i] !== "'") {
    spacelessPhrase += phraseToCheck[i].toLowerCase()
  }
}
console.log(spacelessPhrase)
for(let i = 0; i < spacelessPhrase.length; i++) {
  if(spacelessPhrase[i] === spacelessPhrase[spacelessPhrase.length - 1 - i]) {
    isPalindrome = true;
  } else {
    isPalindrome = false;
    break
  }
  }
