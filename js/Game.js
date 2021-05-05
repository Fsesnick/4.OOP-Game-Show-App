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
        const phrases = [    new Phrase('Exterminate'),  
                            new Phrase('Bow ties are cool'),
                            new Phrase('Spoilers'), 
                            new Phrase('Reverse the polarity of the neutron flow'),  
                            new Phrase('The Doctor lies'),                          
                        ];
        return  phrases;
    }

}