$(function(){
// Creates an array for the available words to be pulled from the wordbank
var words = ["TECHNOLOGY", "BITCOIN", "COMPUTER"];

// Grabs a random word from the wordbank
var rand = words[Math.floor(Math.random() * words.length)];
console.log(rand)

// Creates an array for the alphabet inputs
used_letters = [];

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
var check = function (guess) {
  var exist = false;
  console.log(rand);
  for (var i = 0; i < rand.length; i++){
    if (guess === rand[i]){
      exist = true;
      hidden_word[i] = guess;
    }
  }
  return exist;
}

// Checks the guess to see if it has already been used before
var used = function(guess) {

  if (used_letters.indexOf(guess) !== -1){
    alert("This guess has been used before.  Guess again.");
  }else {
    used_letters.push(guess)
  }
}


// Life counter
var lives = 6;

//

var turn = function(guess){
  console.log("start of turn");
  if (hidden_word.indexOf("_") !== -1) {
    // Prompt user for letter
    used(guess);
    console.log(guess);
    console.log("guess checking");
    if (!check(guess)) {
      console.log("wrong guess");
      lives = lives - 1;
      alert("This is not a valid letter. You have " + lives + " left.");
      if (lives === 0) {
        alert("Game over!");
      }
    }
    console.log(hidden_word);
  }
}

$("span").on("click", function(){
  turn($(this).text());
})
//
})
