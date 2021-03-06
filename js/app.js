/* FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
/** 
 * Listens for click on `btn__reset` and calls startGame() on game object
 */
 document.getElementById('btn__reset').addEventListener('click', function(){

    game = new Game();
    
    let resetKeys = document.querySelectorAll('.key');
    for(const key of resetKeys) {      
        key.disabled = false;
     } 

    game.startGame();
});

/** 
 * Listens for click on qwerty buttons 
 */
document.getElementById('qwerty').addEventListener('click', function(evt){
   
    if(evt.target.className === 'key'){
         game.handleInteraction(evt);
    }
    
});

/*const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


/**
 * Tests
 */

/*
game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});

const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
    };
    const game = new Game();
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
*/