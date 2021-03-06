(function(root){

  var GAME = root.GAME = (root.GAME || {});

  var HANGMAN = GAME.HANGMAN = function(){
    // Creates an array for the available words to be pulled from the wordbank
    var words = ["TECHNOLOGY", "BITCOIN", "COMPUTER", "ALGORITHM", "GITHUB", "DATABASE", "JAVASCRIPT",
    "ADOBE", "TERNARY", "SOFTWARE", "BROWSER", "SOFTWARE", "FUNCTION", "VIRUS", "SPYWARE", "NETWORK", "TRADEMARK",
    "COPYWRITE", "ANALYTICS", "BANDWITH", "DIRECTORY", "RESOLUTION", "VALIDATION", "AJAX", "LIBRARY", "GEM", "COOKIES",
    "CACHE", "FRAMEWORK", "DOCTYPE", "DOMAIN", "ELEMENT", "FAVICON", "HYPERTEXT", "INHERITANCE", "MARKUP", "NAVIGATION",
    "NESTING", "PERMALINK", "PROPERTY", "PSUEDO", "SCHEMA", "SCRIPT", "SELECTOR", "SEMANTICS", "SERVER", "CLIENT", "TAG",
    "TEMPLATE", "VALID", "ATTRIBUTES", "ARRAY", "CASCADE", "HTML5", "FLOAT", "FUNCTION", "FRAMES", "GLOBAL", "LOCAL",
    "JAVA", "LOCAL", "RUBY", "MYSQL", "MARGIN", "OPERATORS", "PADDING", "PLUGIN", "SCOPE", "STRING", "TYPOGRAPHY", "TEMPLATE",
    "VALUE", "VARIABLE", "WIREFRAME", "ROUTES", "CONTROLLERS", "ASSETS", "SEO", "JQUERY", "BOOLEAN",];

    // Grabs a random word from the wordbank
    var rand = words[Math.floor(Math.random() * words.length)];
    // console.log(rand)

    // Creates an array for the alphabet inputs
    used_letters = [];

    // Life counter
    var lives = 6;

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
    $("#word").html(hidden_word.join(" "));
    $("#numberoflives").html("Body parts left: "+lives)

    // Check the guess to see if it matches any of the letters from the random word
    var check = function (guess) {
      var exist = false;
      console.log(rand);
      console.log(hidden_word.join(""));
      console.log(rand)
      for (var i = 0; i < rand.length; i++){
        if (guess === rand[i]){
          exist = true;
          hidden_word[i] = guess;
          if (hidden_word.join("") === rand) {
            console.log("howdy")
            $("#openModal4").removeClass("hidden");
          };
          $("#word").html(hidden_word.join(" "));
        }
      }
      return exist;
    }

    // Checks the guess to see if it has already been used before
    var used = function(guess) {
      console.log("hello")
      if (used_letters.indexOf(guess) !== -1){
        alert("This guess has been used before.  Guess again.");
        return true
      }else {
        used_letters.push(guess)
        return false
      }
    }

    //
    var turn = function(guess){
      console.log("start of turn");
      if (hidden_word.indexOf("_") !== -1) {
        if (!check(guess) && !used(guess)) {
          console.log("wrong guess");
          lives = lives - 1;
          $("#numberoflives").html("Body parts left:"+lives)
          switch (lives) {
            case 0:
                $("#hangmanleg2").removeClass("hidden");
                break;
            case 1:
                $("#hangmanleg1").removeClass("hidden");
                break;
            case 2:
                $("#hangmanarm2").removeClass("hidden");
                break;
            case 3:
                $("#hangmanarm1").removeClass("hidden");
                break;
            case 4:
                $("#hangmanbody").removeClass("hidden");
                break;
            case 5:
                $("#hangmanhead").removeClass("hidden");
                break;
          }
        // alert("This is not a valid letter. You have " + lives + " left.");
          if (lives === 0) {
            console.log($("#gameOver"));
            $("#openModal3").removeClass("hidden")
          };
        }
      }
    }

    $("span").on("click", function(){
      turn($(this).text());
    })
//
  }
})(this)
