/* FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js -  create a Game class methods for starting and ending the game, handling
interactions, getting a random phrase, checking for a win, and removing a life from the
scoreboard.*/

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of Doctor who phrases that could be used in the game
    */
    createPhrases(){
        const phrases = [   new Phrase('Exterminate'),  
                            new Phrase('Bow ties are cool'),
                            new Phrase('Spoilers'), 
                            new Phrase('Fantastic'),  
                            new Phrase('The Doctor lies'),                          
                        ];
        return  phrases;
    };
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){
        const randomNumber = Math.ceil (Math.random() * this.phrases.length -1 );
        let randomPhrase = this.phrases[randomNumber];      
        // Return the random quote object
        return randomPhrase;
    };
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase );

        this.activePhrase.addPhraseToDisplay();
    };
  
}