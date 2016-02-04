$(function() {
  // Step 0: Set your assigned pokemon to the "pokemon" variable! I have put in Bulbasaur for an example
  var pokemon = squirtle;

  // STEP 1: Uncomment the next line and make sure that the pokemon object prints to the console!
  console.log(pokemon.abilities[0].name);

  // STEP 2: Use jQuery to add information to the empty fields. The first few have been done for you.

  $(".pokemon-name").append(pokemon.name);


  $(".pokemon-species").append(pokemon.species);
  $(".pokemon-evolves").append(pokemon.evolutions.to);

  // TODO: Add evolution level here
   $(".pokemon-ev-level").append(pokemon.evolutions[0].level);
  // TODO: Add speed here
   $(".pokemon-spd").append(pokemon.speed);
  // TODO: Add attack here
   $(".pokemon-atk").append(pokemon.attack);
  // TODO: Add defense here
   $(".pokemon-def").append(pokemon.defense);
  // TODO: Add ability names here
   for(var i=0;pokemon.abilities.length;i++){
      $(".pokemon-evolves").append("<li>" + pokemon.abilities[0].name + "</li>");
    }
  // TODO: Add egg group names here
    for(var i=0;pokemon.egg_groups.length;i++){
        $(".pokemon-evolves").append(pokemon.egg_groups[i].name);
      }
  // TODO: Add move names in alphabetical order here
    
  // TODO: Add ONLY level up move names here

  // Now... take a deep breath and go back to your move lists.
  // TODO: Find a way to use variables to make your code more readable!

  // (extra credit) TODO:  either...
  //   1. Change up your code so that visitors can select which pokemon (squirtle, charmander, bulbasaur, etc.)
  //   they want to see, and then show that pokemon's stats and picture, or...
  //   2. Use the Pokeapi to let your users access all of the pokemon! Don't worry about the picture.

  // (extra credit) TODO: Add a list of all avaiable learn_types with no repeats!
  
  
  // You don't have to touch anything below here, but if you're curious, this code
  // automatically changes the pokedex image to match your current Pokemon.
  var getProperImageURL = function(pokemon) {
    var pokemonNumber = pokemon.pkdx_id;
    var urlNum = returnThreeDigits(pokemonNumber);
    return "https://assets22.pokemon.com/assets/cms2/img/pokedex/full/" + urlNum + ".png";
  };
  
  var returnThreeDigits = function(num) {
    if (num < 10) {
      return "00" + num;
    } else if (num < 100) {
      return "0" + num;
    } else {
      return num;
    }
  };

  var tag = $("<img>").attr("src", getProperImageURL(pokemon)).attr("alt", "Oh no! Is pokemon defined?");
  $(".image-container").html(tag);
});
