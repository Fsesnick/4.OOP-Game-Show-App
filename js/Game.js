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
        const phrases = [   new Phrase('exterminate'),  
                            new Phrase('bow ties are cool'),
                            new Phrase('spoilers'), 
                            new Phrase('fantastic'),  
                            new Phrase('the doctor lies'),                          
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

        let K = document.querySelectorAll('.key');
        K.forEach(button => {
            button.className = 'key';
        });
    };
// https://www.w3schools.com/howto/howto_js_add_class.asp
    handleInteraction(button){
  
        if(this.activePhrase.checkLetter(button.target.innerHTML)){
          this.activePhrase.showMatchedLetter(button.target.innerHTML);
            if(this.checkForWin()){
                this.gameOver(true);             
            }
            
            if(button.target.className != 'keyrow'){
                    button.target.classList.add('chosen');
                    button.target.disabled = true;
            }        
          
       }else{          

           if(button.target.className != 'keyrow'){          
                button.target.classList.add('wrong');
                button.target.disabled = true;
                this.removeLife();
           }           
       }

    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {

        let win = false;
        const ul = document.querySelector('#phrase ul').children;     
        
        const hiddenLetters = document.querySelectorAll('.hide');

       for (let i = 0; i < ul.length; i++) {
            if (hiddenLetters.length === 0 ){
                win =true;
            }else{
                win = false
            }
        }

        return win;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {

        const hearts = document.querySelectorAll('.tries img');
		this.missed += 1;   

		this.missed === 5 ? this.gameOver(false) : (hearts[this.missed - 1].src = 'images/lostHeart.png');
    };

    /**
    * Displays game over message, and clear the phrase ul
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const Overlay = document.getElementById('overlay');
		const gameOvrMsg = document.getElementById('game-over-message');

        if (gameWon) {
            gameOvrMsg.innerHTML = 'Congrats! You have guessed the Doctor who phrase!';
            Overlay.className = 'win';
            Overlay.style.display = "flex";            
            this.resetGame(); 
        } else {
            gameOvrMsg.textContent = "Sorry, you lost, why don't you try again? :(";
            Overlay.className = 'lose';
            Overlay.style.display = "flex";
            this.resetGame(); 
        }
            
        
    };  
    resetGame(){

        //reset  for new game
        document.querySelector('#phrase ul').innerHTML = '';

        let resetKeys = document.querySelectorAll('.key');
        console.log(resetKeys);

        for(const key of resetKeys) {
            key.disabled = false;
            key.classList.remove('wrong', 'chosen');
        } 
       
        this.missed = 0;
        //Reset hearts
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart => heart.src = "images/liveHeart.png " );
    };
   

}