// Creates an array for the available words to be pulled from the wordbank
var words = ["technology", "bitcoin", "computer"];

// Grabs a random word from the wordbank
var rand = words[Math.floor(Math.random() * words.length)];
console.log(rand)

// Creates an array for the alphabet inputs
alpha_key = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Assigns a value from the alphabet to coordinate with the random word
var rand_key = rand.split("");
console.log(rand_key);

// Turns the random word into blanks to be filled
var blanks = function () {
  var blank_word = "";
  for (i = 0; i < rand.length; i++) {
    blank_word += "_";
  };
  return(blank_word.split(""));
};
var hidden_word = blanks();
console.log(hidden_word);

// Tells the user in a prompt how many blanks are in the word
alert("The blanks for the word generated: " + blanks() );


// Check the guess to see if it matches any of the letters from the random word
var check = function () {
  var positions = [];
  for (var i=0; i <= rand.length; i++){
    if (guess===rand.charAt(i)){
      positions.push(i);
      console.log(positions);
      hidden_word[i] = rand[i];
    }
  }

}
while (hidden_word.indexOf("_") !== -1){
  // Prompt user for letter
  var guess = prompt("guess a letter");
  console.log(guess);
  check(guess);
  console.log(hidden_word)
}
